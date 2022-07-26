import { heroes } from '../data/heroes'


const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']

    if (!validPublishers.includes(publisher)) {
        throw new Error(`El ${publisher} enviado no es valido`)
    }

    return heroes.filter((hero) => hero.publisher === publisher)

}

export default getHeroesByPublisher