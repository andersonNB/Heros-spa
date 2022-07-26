import React from "react";
import {getHeroesByPublisher} from "../helpers";
import HeroCard from "./HeroCard";

const HeroList = ({publisher}) => {
	const heroes = getHeroesByPublisher(publisher);

	// console.log("hero list: ", heroes);

	return (
		<div className="row rows-cols-1 row-cols-md-3 g-3">
			{heroes.map((heroDcMarvel) => {
				return <HeroCard key={heroDcMarvel.id.toString()} {...heroDcMarvel} />;
			})}
		</div>
	);
};

export default HeroList;
