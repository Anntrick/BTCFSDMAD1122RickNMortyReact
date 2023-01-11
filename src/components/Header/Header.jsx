import { NavLink } from "react-router-dom"
import './Header.scss'
const Header = () => {

    return (
        <div className="Header">
            <ul>
                <li>
                    {/* Es igual que el elemento <a> */}
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/characters">Personajes</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header