import {LOGIN, TOKEN, PATH, TH, TOP, COUNT, REFRESH} from '../constants/index';

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



export function top(payload) {
    return { type: TOP, payload }
};


export function countChange(payload) {
    return { type: COUNT, payload }
};


export function refresh(payload) {
    return { type: REFRESH, payload }
};
