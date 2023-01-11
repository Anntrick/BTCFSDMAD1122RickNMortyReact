import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { RickAndMortyService } from "../../services/RickAndMortyService"

const CharacterDetail = () => {
    const params = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        getCharacter()
    }, [])

    const getCharacter = async () => {
        try {
            let tempCharacters = await RickAndMortyService.getCharacterById(params.id)
            setCharacter(tempCharacters.data)
        } catch (err) {
            console.log(err)
        }

    }
    
    return (
        <div className="CharacterDetail">
            <h1>Soy el detalle de {character.name}</h1>
            <img src={character.image} />
          
        </div>
    )
}

export default CharacterDetail