// src/js/actions/MenuActions.js

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export function showLogin() {
    return { type: USER_LOGIN };
}

export function showLogout() {
    return { type: USER_LOGOUT };
}