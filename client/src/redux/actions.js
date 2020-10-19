import * as constants from './constants'
import axios from "axios";

const url = "http://localhost:9000/";

const instance = axios.create({
    withCredentials: true,
    baseURL: url,
});

//-----------------------------------
//            LOGIN                 |
//-----------------------------------
export const userLogin = (login) => {
    return async function(dispatch) {
        try {
            const log = await instance.post('/user/login', login)
            dispatch({
                type: constants.LOGIN_USER, payload: log.data
            })
        } catch(err) { throw Error() }
    }
}

export const getMe = () => {
    return async function(dispatch){
        try {
            const user = await instance.get('/user/me')
            dispatch({
                type: constants.ME, payload: user.data
            })
        } catch(err) { throw Error(err) }
    }
}

//-----------------------------------
//           REGISTER               |
//-----------------------------------
export const userRegister = async (register) => {
    try {
        const a = await instance.post('/user/register', register)
        console.log('DATA')
        console.log(a.data)
    } catch(err) { throw Error(err) }
}

