import {useNavigate} from "react-router-dom";

const LoginPage = () => {
	const navigation = useNavigate();

	const onLogin = () => {
		console.log("login");

		navigation("/", {
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
