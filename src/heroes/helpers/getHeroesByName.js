import { heroes } from "../data/heroes";

const getHeroesByName = (name = "") => {


    let nameMinus = name.toLocaleLowerCase().trim()
    console.log({ nameMinus })
    if (name.length === 0) return [];

    return heroes.filter((hero) => hero.superhero.toLocaleLowerCase().includes(nameMinus))

}

export default getHeroesByName