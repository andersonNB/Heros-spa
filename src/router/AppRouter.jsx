import {Route, Routes} from "react-router-dom";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import {LoginPage, ErrorPage} from "../auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
	return (
		<>
			<Routes>
				{/* Rutas publicas */}
				{/* <Route path="login" element={<LoginPage />} /> */}
				<Route
					path="/login"
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>

				{/* De esta manera creamos rutas privadas */}
				<Route
					path="/*"
					element={
						<PrivateRoute>
							<HeroesRoutes />
						</PrivateRoute>
					}
				/>
				{/* <Route path="/*" element={<HeroesRoutes />} /> */}
			</Routes>
		</>
	);
};

export default AppRouter;
