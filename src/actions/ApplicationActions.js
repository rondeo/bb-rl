import {APPLICATION_LOGIN, APPLICATION_LOGOUT, APPLICATION_UPDATE_USER} from "../constants";

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

export const updateUser = (user) => dispatch => {
    dispatch({
        type: APPLICATION_UPDATE_USER,
        user: user
    })
};