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
    return function(dispatch) {
        try {
            instance.post('/user/login', login)
                .then((login) => dispatch({
                    type: constants.LOGIN_USER, payload: login.data
                }))
        } catch(err) { console.log(err) }
    }
}

export const getMe = async () => {
    try {
        const user = await instance.get('/user/me')
        console.log(user)
        return user
    } catch(err) { console.log(err) }
}

//-----------------------------------
//           REGISTER               |
//-----------------------------------
export const userRegister = (register) => {
    return async function (dispatch) {
        try {
            const a = await instance.post('/user/register', register)
            console.log(a.data)
            await userLogin(register.data)
            const me = await getMe()
            console.log(me)
        } catch(err) { console.log(err) }
    }
}

