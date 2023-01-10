import axios from "axios";

export const RickAndMortyService = {}

RickAndMortyService.getCharacters = async () => {
    const apiUrl = `https://rickandmortyapi.com/api/character/`;

    return await axios.get(apiUrl);
}

