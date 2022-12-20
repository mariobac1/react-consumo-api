import { Link } from "react-router-dom"

const Home = () => {
    return(
        <>
        <h1>Hola,bienvenidos a CriptoMarket</h1>
        <p>Conoce las 100 criptos más usadas</p>
        <Link to="/criptomonedas">Ver criptomonedas </Link>
        </>
    )
}

export default Home