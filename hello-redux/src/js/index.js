// src/index.js

import store from "../js/store/index";
import { showLogin, showLogout } from "./actions/MenuActions";

window.store = store;
window.showLogin = showLogin;
window.showLogout = showLogout;

window.store.getState();
window.store.subscribe(() => window.alert(JSON.stringify(window.store.getState())) );

window.store.dispatch( window.showLogin() );
window.store.dispatch( window.showLogout() );
