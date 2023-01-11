import { useState, useEffect } from 'react'


import { RickAndMortyService } from '../../services/RickAndMortyService';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

const ListCharacters = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getAllChars()
    }, [])

    const getAllChars = async () => {
        try {
            let tempCharacters = await RickAndMortyService.getCharacters()
            setCharacters(tempCharacters.data.results)
            console.log(characters)
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div className="ListCharacters">
            {
                characters.map(char => (
                    <CharacterCard key={char.id} data={char} />
                ))
            }


        </div>
    )
}

export default ListCharacters