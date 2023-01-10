


const CharacterCard = (props) => {


    return (
        <div className="CharacterCard">
            <h1>{props.data.name}</h1>
            <img src={props.data.image} />
            <p>{props.data.status}</p>
        </div>
    )
}

export default CharacterCard