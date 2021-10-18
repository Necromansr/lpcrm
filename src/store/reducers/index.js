import { initialState } from '../initialState'
import { LOGIN, TOKEN, PATH, TH } from '../constants/index';


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
    }
    return state;
};

export default rootReducer;