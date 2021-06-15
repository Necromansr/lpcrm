import {LOGIN, TOKEN, PATH} from '../constants/index';

export function isLogins(payload) {
    return { type: LOGIN, payload }
};


export function token(payload) {
    return { type: TOKEN, payload }
};


export function path(payload) {
    return { type: PATH, payload }
};