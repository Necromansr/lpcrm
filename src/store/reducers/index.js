import { initialState } from '../initialState'
import { LOGIN, TOKEN, PATH, TH, TOP, COUNT, REFRESH } from '../constants/index';


function rootReducer(state = initialState, action) {
    if (action.type === LOGIN) {
        return {
            ...state,
            isLogin: action.payload
        }
    } else if (action.type === TOKEN) {
        return {
            ...state,
            token: action.payload
        }
    } else if (action.type === PATH) {
        return {
            ...state,
            path: action.payload
        }
    } else if (action.type === TH) {
        return {
            ...state,
            th: action.payload
        }
    } else if (action.type === TOP) {
        return {
            ...state,
            top: action.payload
        }
    } else if (action.type === COUNT) {
        return {
            ...state,
            count: action.payload
        }
    } else if (action.type === REFRESH) {
        return {
            ...state,
            refresh: action.payload
        }
    }
    return state;
};

export default rootReducer;