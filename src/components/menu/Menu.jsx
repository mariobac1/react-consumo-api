import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Usercontext } from "../../context/UserContext"
import "./Menu.css"

const Menu = () => {

    const usuario = useContext(Usercontext)
    const navigation = useNavigate()

    return(
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de criptos</NavLink></li>
                <li><NavLink to="/perfil">Perfil de { usuario.name }</NavLink></li>
                <li><a onClick={() => {
                    localStorage.removeItem("tokenCriptoMarket")
                    navigation("/login")
                }}>Cerrar sesión</a></li>
            </ul>
        </nav>
    )
}

export default Menu