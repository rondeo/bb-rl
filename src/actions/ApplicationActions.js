import {APPLICATION_LOGIN, APPLICATION_LOGOUT} from "../constants";

export const login = (user) => dispatch => {
    dispatch({
        type: APPLICATION_LOGIN,
        user: user
    })
};

export const logout = () => dispatch => {
    dispatch({
        type: APPLICATION_LOGOUT
    })
};