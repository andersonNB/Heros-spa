//Este archivo es el que proveera de información a toda la aplicación

import {useReducer} from "react";
import {types} from "../types/types";
import AuthContext from "./AuthContext";
import {authReducer} from "./authReducer";

const initialState = {
	logged: false,
};

const init = () => {
	const user = JSON.parse(localStorage.getItem("user"));

	//Como el localStorage guardar y retornar string debemos
	// en este caso convertirlo a un objeto para que sea
	// aceptado en nuestro estado inicial

	return {
		logged: !!user,
		user: user,
	};
};

const AuthProvider = ({children}) => {
	//Si necesitamos mucho control context y reducer
	//pueden venir bien
	// Aquí inicializamos nuestro authState
	const [authState, dispatch] = useReducer(authReducer, initialState, init);

	//Creamos nuestra función de login y esta nos ayudará con este proceso
	//suponemos que nos envia el name
	const login = async (name = "") => {
		const user = {id: "id creado o del bk", name: name};

		const action = {
			types: types.login,
			payload: user,
		};

		localStorage.setItem("user", JSON.stringify(user));

		dispatch(action);
	};

	const logout = () => {
		const action = {
			types: types.logout,
			payload: null,
		};

		//con el clear limpia toda la info guardada y con el removeItem, solo el que le
		//especifiquemos
		localStorage.removeItem("user");

		dispatch(action);
	};

	return (
		<AuthContext.Provider value={{...authState, login: login, logout: logout}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
