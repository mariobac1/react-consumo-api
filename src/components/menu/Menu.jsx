import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { Usercontext } from "../../context/UserContext"
import "./Menu.css"

const Menu = () => {

    const usuario = useContext(Usercontext)

    return(
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li>
                <li><NavLink to="/perfil">Perfil de { usuario.name }</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu