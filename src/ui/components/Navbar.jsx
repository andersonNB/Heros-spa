import {Link, NavLink, useNavigate} from "react-router-dom";
const Navbar = () => {
	/** Para simular que cambiamos de pantalla utilizaremos
	 * el custom hooks useNavigate
	
	*/
	const navigate = useNavigate();

	const onLogout = () => {
		console.log("Log out");
		//De esta manera al darle clic me redirige a
		// la página del login y con el objeto
		// su propiedad replace lo que hace es borrar la
		// página que ya e visitado previamente
		//así no me permitiría volver al login si no
		//estoy logueado
		navigate("login", {replace: true});
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						className={(args) =>
							` nav-item nav-link ${args.isActive ? "active" : ""}`
						}
						to="/marvel"
					>
						Marvel
					</NavLink>

					<NavLink className="nav-item nav-link" to="/dc">
						DC
					</NavLink>
					<NavLink className="nav-item nav-link" to="/search">
						Search
					</NavLink>
					{/* <NavLink className="nav-item nav-link" to="/hero">
						Hero
					</NavLink> */}
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					{/* <NavLink className="nav-item nav-link" to="/login">
						Logout
					</NavLink> */}

					<span className="nav-item nav-link text-info">Andeson Navarro</span>

					<button className="nav-item nav-link btn" onClick={onLogout}>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
