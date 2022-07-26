import { heroes } from "../data/heroes"

const getHeroById = (id) => {
    console.log("Me ejecute")
    //find retorna undefined si no encuentra el id
    return heroes.find((heroe) => heroe.id === id);
}

export default getHeroById