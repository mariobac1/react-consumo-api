import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './components/App'
import "./main.css"
import Pagina404 from './components/404'
import Cuadricula from './components/Cuadricula'
import Home from './Home'
import CriptoPage from './components/cripto/CriptoPage'
import Perfil from './components/usuarios/Perfil'
import { UsercontextProvider } from './context/UserContext'
import Login from './components/usuarios/Login'


ReactDOM.createRoot(document.getElementById('root')).render(
    <UsercontextProvider>
        <BrowserRouter>            
            <Routes>                
                <Route path='/' element={ <App />}>
                    <Route index element={ <Home />} />        
                    <Route path='perfil' element={ <Perfil />} />        
                </Route>
                <Route path='/criptomonedas' element= {<App />}>
                    <Route index element={<Cuadricula />}/>
                    <Route path=':id' element={<CriptoPage />}/>
                </Route>
                <Route path='/login' element= {<Login />}/>
                <Route path='*' element={ <Pagina404 />} />
            </Routes>
        </BrowserRouter>
    </UsercontextProvider>
)
