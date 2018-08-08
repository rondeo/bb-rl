import {APPLICATION_LOGIN, APPLICATION_LOGOUT, APPLICATION_UPDATE_USER} from "../constants";

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case APPLICATION_LOGIN:
        case APPLICATION_UPDATE_USER:
            return {
                ...action.user
            };
        case APPLICATION_LOGOUT:
            return null;
        default:
            return state;
    }
}