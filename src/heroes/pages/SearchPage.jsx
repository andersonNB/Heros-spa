import {useNavigate, useLocation} from "react-router-dom";
import queryString from "query-string";
import useForm from "../../hooks/useForm";
import {getHeroesByName} from "../helpers";
import {HeroCard} from "../components";

const SearchPage = () => {
	const location = useLocation();
	const navigate = useNavigate();

	// console.log(location);
	const {q = ""} = queryString.parse(location.search);
	const {searchText, onInputChange} = useForm({searchText: q});
	// console.log(query);

	const heroes = getHeroesByName(q);

	const onSearchSubmit = (e) => {
		e.preventDefault();

		console.log({searchText}, searchText.trim().length);
		if (searchText.trim().length === 1) return;

		navigate(`?q=${searchText}`);
	};

	return (
		<>
			<h2>SearchPage</h2>
			<hr />
			{/* En boostrap se maneja col y row dentro de las rows se dividen en 12 columnas */}

			<div className="row">
				<div className="col-5" style={{backgroundColor: "salmon"}}>
					<h4>Searching</h4>
					<form onSubmit={onSearchSubmit}>
						<input
							type="text"
							name="searchText"
							placeholder="Search a hero"
							className="form-control"
							autoComplete="off"
							value={searchText}
							onChange={onInputChange}
						/>
						<button className="btn btn-primary mt-1">Search</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results: </h4>

					{/* Una forma de hacer los condicionales
					{
						(q==="")
						?<div className="alert alert-primary">Search a Hero</div>
						:(heroes.length === 0) && <div>No hero</div>
					} */}

					{heroes.length >= 1 ? (
						<>
							<div className="alert alert-primary">Search a hero</div>
							{heroes.map((hero) => (
								<HeroCard {...hero} key={hero.id.toString()} />
							))}
						</>
					) : (
						<div className="alert alert-danger">
							No hero with <b>{q}</b>{" "}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default SearchPage;
