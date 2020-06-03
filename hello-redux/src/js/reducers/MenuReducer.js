// src/js/reducers/MenuReducer.js

import { USER_LOGIN, USER_LOGOUT } from "../actions/MenuActions";

const DEFAULT_LOGIN_STATE = {
    isLogin: false
};

export default (state = DEFAULT_LOGIN_STATE, action) => {
    switch(action.type) {
        case USER_LOGIN:
            return { is_login: true}
        case USER_LOGOUT:
            return { is_login: false}
        default:
            return state;
    }
}