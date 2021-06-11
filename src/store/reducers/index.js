import {initialState} from '../initialState'
import {LOGIN, TOKEN} from '../constants/index';


function rootReducer(state = initialState, action) {
    if (action.type === LOGIN) {
        return { 
            ...state,
            isLogin : action.payload
        }
    } else if (action.type === TOKEN) {
        return { 
            ...state,
            token : action.payload
        }
      }
    return state;
};
  
export default rootReducer;