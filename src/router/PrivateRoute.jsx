import {useContext} from "react";
import {Navigate, useLocation} from "react-router-dom";
import AuthContext from "../auth/context/AuthContext";

const PrivateRoute = ({children}) => {
	console.log("children: ", children);

	const {logged} = useContext(AuthContext);
	const {pathname, search} = useLocation();

	const lastPath = pathname + search;
	// console.log(lastPath);
	localStorage.setItem("lastPath", lastPath);

	console.log("re-render");

	//SI es true muestro los hijos que al final se traduce en rutas/componentes
	//si no se cumple envio a la página de login
	return logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
