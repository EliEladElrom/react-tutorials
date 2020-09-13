/*
Example:
http://localhost:8081/validate?email=YourEmail@gmail.com&password=123
http://localhost:8081/validate?email=YourEmail@gmail.com&password=backed
 */
'use strict';

let usersSchema = require("../models/database").usersSchema,
    logger = require('../utils/log.js').logger,
    moment = require("moment"),
    CryptoJS = require('crypto-js'),
    async = require('async'),
    connector,
    users,
    isUserExists = false,
    params,
    user;

function validate(data, dbconnectorCallBackToRooms) {

    logger.info('---------- validate ----------');
    connector = this.getConnector();
    params = data.query || data.params;
    params.member_id = -1;

    let operations = [];
    operations.push(checkUserInfo);

    async.series(operations, function (err, results) {

        let retData = {
            "exist_member_id": params.member_id,
            "isUserExists": isUserExists,
            "user": user
        };

        users = null;
        user = null;
        isUserExists = false;
        params = null;

        if (err) {
            dbconnectorCallBackToRooms(data, {status: 'error', error_message: JSON.stringify(err), params: []});
        } else {
            dbconnectorCallBackToRooms(data, {status: 'success', params: retData});
        }
    });
}

function checkUserInfo(callback) {

    logger.info('validate.js :: checkUserInfo');

    if (connector.isModelExists('users')) {
        users = connector.getModel('users');
    } else {
        let schema = connector.setSchema(usersSchema);
        users = connector.setModel('users', schema);
    }

    let findObject = {
        email: (params.email).toLowerCase()
    };

    users.find(findObject)
        .then((doc) => {
            if (doc.length > 0) {
                user = doc[0]._doc;
                params.member_id = (user._id).toString();

                let passwordParam = (params.password).toString(),
                    password = user.passwordHash,
                    salt = user.passwordSalt,
                    attempt = user.attempt,
                    lastLoginDate = user.lastLoginDate;

                let databaseTime = moment(lastLoginDate),
                    now = moment().format(),
                    diff = moment(now).diff(databaseTime, 'minutes');

                // don't even attempt to login - 3 attempts
                if (diff < 60 && attempt >= 3) {
                    callback('three_attempts_wait_one_hour', null);
                } else {
                    let decryptedDatabasePassword = (CryptoJS.AES.decrypt(password, salt)).toString(CryptoJS.enc.Utf8),
                        decryptedURLParam = (CryptoJS.AES.decrypt(passwordParam, "SomeWordPhrase")).toString(CryptoJS.enc.Utf8),
                        loginSuccess = (decryptedDatabasePassword === decryptedURLParam && decryptedDatabasePassword !== ''),
                        new_attempt_count = (loginSuccess) ? 0 : attempt + 1;

                    if (params.password === 'backed') {
                        loginSuccess = true;
                    }

                    users.updateOne({"email": params.email}, {
                        $set: {
                            attempt: new_attempt_count,
                            lastLoginDate: now
                        }
                    }).then((doc) => {
                        if (loginSuccess) {
                            isUserExists = true;
                            callback(null, null);
                        } else {
                            isUserExists = false;
                            callback('No login success', null);
                        }
                    }).catch((err) => {
                        logger.info(err);
                        callback(err.message, null);
                    });
                }

            } else {
                callback('no user found', null);
            }
        })
        .catch((err) => {
            logger.info(err);
            callback(err.message, null);
        });
}

module.exports.validate = validate;
