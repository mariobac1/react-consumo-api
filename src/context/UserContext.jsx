import { createContext, useEffect, useState } from "react";

const Usercontext = createContext()

const UsercontextProvider = ({ children }) => {
    const [ usuario, setUsuario ] = useState({})
    useEffect(() => {
        setUsuario({
            name:"Juan Morales",
            registered:"21/diciembre/2022"
        })
    }, [])

    return(
        <Usercontext.Provider value={usuario}>
            { children }
        </Usercontext.Provider>
    )
}

export { Usercontext, UsercontextProvider }