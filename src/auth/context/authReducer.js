import { types } from "../types/types";

// COmo se vera mi estado inicial
// const initialState = {
//     logged: false,
// }
//EL reducer solo se debe enfocar en sus acciones no más
export const authReducer = (state = {}, action) => {

    console.log("state: ", state)
    console.log("action: ", action)

    console.log(types.login)

    switch (action.types) {
        case types.login:

            // Siempre es bueno hacer copia al state o a Sus
            //propiedades ya que no sabemos si se van a agregar mas
            // en un futuro

            return {
                ...state,
                logged: true,
                user: action.payload
            }

        case types.logout:
            return {
                ...state,
                logged: false,
                user: action.payload
            }

        default:
            return state;
    }

}