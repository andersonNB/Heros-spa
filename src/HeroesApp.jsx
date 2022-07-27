import {AuthProvider} from "./auth";
import AppRouter from "./router/AppRouter";

const HeroesApp = () => {
	return (
		<AuthProvider>
			<h1>HeroesApp-ComponentHeroesApp</h1>
			<AppRouter />
		</AuthProvider>
	);
};

export default HeroesApp;
