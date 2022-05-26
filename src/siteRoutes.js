import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import CorPrimaria from './pages/corPrimaria'
import Ingresso from './pages/Ingresso'
import MaiorNumero from './pages/MaiorNumero'
import Texto from './pages/Texto'

export default function SiteRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/corPrimaria' element = {<CorPrimaria />} />
            <Route path='/Ingresso' element = {<Ingresso />} />
            <Route path='/MaiorNumero' element = {<MaiorNumero />} />
            <Route path='/Texto' element = {<Texto />} />
        </Routes>
        </BrowserRouter>
    )
}