import {Navigate, Route, Routes} from "react-router-dom";
import {Navbar} from "../../ui";
import {HeroCard} from "../components";
import {DcPage, HeroPage, MarvelPage, SearchPage} from "../pages";

const HeroesRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="marvel" element={<MarvelPage />} />
					<Route path="marvel/hero/:heroID" element={<HeroPage />} />
					<Route path="dc" element={<DcPage />} />
					<Route path="dc/hero/:heroID" element={<HeroPage />} />
					<Route path="search" element={<SearchPage />} />
					<Route path="search/hero/:heroID" element={<HeroPage />} />
					<Route path="/" element={<Navigate to="/marvel" />} />
				</Routes>
			</div>
		</>
	);
};

{
	/* <Route path="marvel" element={<MarvelPage />}>
						<Route path="marvel/hero/:heroID" element={<HeroPage />} />
					</Route> */
}

export default HeroesRoutes;
