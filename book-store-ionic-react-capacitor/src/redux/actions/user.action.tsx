import sendRequest from '../../helpers/sendRequest'
import { userConstants } from '../constants/user.constants'


export const userAction = {
    signup,
    login,
    getUserData,
    updateUser

}


function signup(data:any) {
    return (dispatch:any) => {
        dispatch({
            type: userConstants.USER_SIGNUP_REQUEST
        })
        return sendRequest({
            method: 'POST',
            url: `/user/signup/`,
            data
        }).then(() => {
            dispatch({
                type: userConstants.USER_SIGNUP_SUCCESS,

            })
        },
            ({ response }:any) => {
                dispatch({
                    type: userConstants.USER_SIGNUP_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}


function login(data:any) {

    return (dispatch :any)=> {
        dispatch({
            type: userConstants.USER_LOGIN_REQUEST
        })
        return sendRequest({
            method: 'POST',
            url: `/user/login/`,
            data
        }).then((user:any) => {
            dispatch({
                type: userConstants.USER_LOGIN_SUCCESS,
                user
            })
        },
            ({ response }:any) => {
                dispatch({
                    type: userConstants.USER_LOGIN_FAILURE,
                    error: response?.data?.message ?? "pass or mail no valid"
                })
            }
        )
    }
}



function getUserData() {
    return (dispatch:any) => {
        dispatch({
            type: userConstants.GET_USER_DATA_REQUEST
        })
        return sendRequest({
            method: 'GET',
            url: `/user/getuserdata/`,
        }).then((userData:any) => {
            dispatch({
                type: userConstants.GET_USER_DATA_SUCCESS,
                userData 
            })
        },
            ({ response }:any) => {
                dispatch({
                    type: userConstants.GET_USER_DATA_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}



function updateUser(data:any) {
    return (dispatch:any) => {
        dispatch({
            type: userConstants.UPDATE_USER_REQUEST
        })
        return sendRequest({
            method: 'PUT',
            url: `/user/updateuser/`,
            data
        }).then(() => {
            dispatch(
                getUserData()
            )
        },
            ({ response }:any) => {
                dispatch({
                    type: userConstants.UPDATE_USER_FAILURE,
                    error: (response != undefined && response != null) ? response.data.message : "somthing wrong"
                })
            }
        )
    }
}

