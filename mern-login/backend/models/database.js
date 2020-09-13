/*
 * Copyright 2020 Elad Elrom, All Rights Reserved.
 * Code licensed under the BSD License:
 * @author Elad Elrom <elad.ny...gmail.com>
 */

let usersSchema = {
    email: 'String',
    password: 'String'
};

if (typeof exports != 'undefined' ) {
    exports.usersSchema = usersSchema;
}
