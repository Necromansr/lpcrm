import {LOGIN, TOKEN} from '../constants/index';

export function isLogins(payload) {
    return { type: LOGIN, payload }
};


export function token(payload) {
    return { type: TOKEN, payload }
};