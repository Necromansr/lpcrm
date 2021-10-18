import {LOGIN, TOKEN, PATH, TH} from '../constants/index';

export function isLogins(payload) {
    return { type: LOGIN, payload }
};


export function token(payload) {
    return { type: TOKEN, payload }
};


export function path(payload) {
    return { type: PATH, payload }
};

export function th(payload) {
    return { type: TH, payload }
};
