import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
	const {login} = useContext(AuthContext);
	const navigation = useNavigate();

	const onLogin = () => {
		console.log("login");

		//Si hubo una ultima ruta al momento de loguearse
		//lo redirecciona a esa página
		const lastPath = localStorage.getItem("lastPath") || "/";
		//hacemos el dispatch de la acción de loguearse
		login("Anderson Navarro");

		navigation(lastPath, {
			replace: true,
		});
	};

	return (
		<div className="container mt-5">
			<h1>LoginPage</h1>
			<hr />

			<button className="btn btn-primary" onClick={onLogin}>
				Login
			</button>
		</div>
	);
};

export default LoginPage;
