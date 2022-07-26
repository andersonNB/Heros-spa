import {Route, Routes} from "react-router-dom";
import HeroesRoutes from "../heroes/routes/HeroesRoutes";
import {LoginPage, ErrorPage} from "../auth";

const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="login" element={<LoginPage />} />
				<Route path="/*" element={<HeroesRoutes />} />
			</Routes>
		</>
	);
};

export default AppRouter;
