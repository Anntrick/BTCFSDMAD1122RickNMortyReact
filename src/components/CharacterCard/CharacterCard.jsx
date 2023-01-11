import { NavLink } from "react-router-dom"

import { useState } from "react"

const CharacterCard = (props) => {
    const [characters, setCharacters] = useState({
        url: `/character-detail/${props.data.id}`
    })

    return (
        <div className="CharacterCard">
            <h1>{props.data.name}</h1>
            <img src={props.data.image} />
            <p>{props.data.status}</p>
            <NavLink to={characters.url}>Ver más</NavLink>
        </div>
    )
}

export default CharacterCard