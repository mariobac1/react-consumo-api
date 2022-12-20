import { useEffect, useState } from "react"
import axios from "axios"
import "./Cuadricula.css"
import Cripto from "./cripto/Cripto"


function Cuadricula() {

  const [criptos, setCriptos] = useState()
  
  const API_URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    axios.get(`${API_URL}assets`)
    .then((data) => {
        console.log(data)
        setCriptos(data.data.data)
      })
      .catch(() => {
        console.log("La petición falló ")
      })
  }, [])

  if(!criptos) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1>Lista de criptomonedas</h1>
        <div className="cripto-container">
          { 
            criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
              <Cripto 
                key={id} 
                name={name} 
                priceUsd={priceUsd} 
                symbol={symbol} 
                changePercent24Hr={changePercent24Hr}
                id={id}/>
            )) 
          }
        </div>
    </div>
  )
}

export default Cuadricula
