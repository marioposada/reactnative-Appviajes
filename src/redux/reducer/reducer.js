import { OBTENER_ACCESO, SIGN_OUT } from "../actions/actionTypes"

const initialState = {
    stateGlobal: false,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case OBTENER_ACCESO :
            return {
                ...state,
                stateGlobal: action.payload,
            }
        case SIGN_OUT:
            return {
                ...state,
                stateGlobal: false,
            }
        default: 
            return state;
    }
}
export default rootReducer;