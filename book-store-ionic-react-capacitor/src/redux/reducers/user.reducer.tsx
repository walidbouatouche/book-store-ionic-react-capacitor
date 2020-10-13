import { userConstants } from '../constants/user.constants'


export function user(state = {}, action:any) {
    console.log(action)
    switch (action.type) {
        case userConstants.USER_SIGNUP_REQUEST:
            return {
                ...state,
                loading: true ,
                succes: false ,
                error:false
            };

        case userConstants.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false ,
                error:false
               
            }
           

        case userConstants.USER_SIGNUP_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
                succes: false
            }
        case userConstants.USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true ,
                succes: false ,
                error:false
            };

        case userConstants.USER_LOGIN_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false ,
                error:false,
                userData: action.user.data
            }

        case userConstants.USER_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                succes: false,
                error: action.error
            }
            case userConstants.USER_LOGIN_REQUEST:
                return {
                    ...state,
                    loading: true ,
                    succes: false ,
                    error:false
                };
    
            case userConstants.GET_USER_DATA_SUCCESS:
                return {
                    ...state,
                    succes: true,
                    loading: false ,
                    error:false,
                   _userData: action.userData.data[0]
                }
    
            case userConstants.GET_USER_DATA_FAILURE:
                return {
                    ...state,
                    loading: false,
                    succes: false,
                    error: action.error
                }
       
       
       case userConstants.UPDATE_USER_REQUEST:
        return {
            ...state,
            loading: true ,
            succes: false ,
            error:false
        };

    case userConstants.UPDATE_USER_SUCCESS:
        return {
            ...state,
            succes: true,
            loading: false ,
            error:false,
          
        }

    case userConstants.USER_SIGNUP_FAILURE :
        return {
            ...state,
            loading: false,
            
            succes: false,
            error: action.error
        }
        default:
            return state;
    }




}