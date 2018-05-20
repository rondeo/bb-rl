import {APPLICATION_LOGIN, APPLICATION_LOGOUT} from "../constants";

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case APPLICATION_LOGIN:
            return {
                ...action.user
            };
        case APPLICATION_LOGOUT:
            return null;
        default:
            return state;
    }
}