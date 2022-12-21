import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const Login = () => {

    const navigation = useNavigate()

    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const submit = (e) => {
        e.preventDefault()
        axios.post(`https://reqres.in/api/login`,user)
        .then(data => {
            localStorage.setItem("tokenCriptoMarket", data.data.token)
            navigation("/")
        })
        .catch(e => console.error(e))
    }

    if ( localStorage.getItem("tokenCriptoMarket")) return <Navigate to="/" />

    return (
        <div>
            <h1>Incio de sesión</h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            email: e.target.value
                        })
                    }} type="email" name="email" />

                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            password: e.target.value
                        })
                    }} type="password" name="password" />
                </div>
                <div className="submit">
                    <input type="submit" value="Ingresar" />
                </div>
            </form>
        </div>
    )
}

export default Login