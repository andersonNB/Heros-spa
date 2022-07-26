import {useMemo} from "react";
import {Navigate, useParams, useNavigate} from "react-router-dom";
import {getHeroById} from "../helpers";

const HeroPage = () => {
	const params = useParams();
	//puedo desestructurar params
	// console.log(params);

	const hero = useMemo(() => getHeroById(params.heroID), [params.heroID]);

	console.log(hero);

	const navigate = useNavigate();

	const onBackHeroList = () => {
		navigate(-1, {replace: true});
	};

	const heroImageUrl = `/assets/${hero.id}.jpg `;
	/**
	 * Cuando hay una return de jsx como en este ejemplo que cumpla
	 * una condición , si hay mas funciones y demás cosas que necesite el componente
	 * lo recomendando es hacerlo antes de ese return, para darle sentido al codigo
	 */
	if (hero === undefined) return <Navigate to="/" />;

	return (
		<div className="row mt-5 animate__animated animate__fadeInLeft">
			<div className="col-4">
				<img
					className="img-thumbnail"
					src={heroImageUrl}
					alt={hero.superhero}
				/>
			</div>
			<div className="col-8">
				<h3>{hero.superhero} </h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego: </b>
						{hero.alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher: </b>
						{hero.publisher}
					</li>
					<li className="list-group-item">
						<b>First appearance: </b>
						{hero.first_appearance}
					</li>
				</ul>

				<h5 className="mt-3">Characteres</h5>
				<p>{hero.characters} </p>

				<button className="btn btn-outline-primary" onClick={onBackHeroList}>
					Volver
				</button>
			</div>
			<small>HeroPage</small>
		</div>
	);
};

export default HeroPage;
