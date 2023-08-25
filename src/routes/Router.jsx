import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { Contacto, Intructores, Cursos } from '../Componentes/pages/index';
import App from '../App';
import Nabvar from '../Componentes/Navbar/Navbar'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Nabvar />} path="/">
                <Route element={<App />} index />
                <Route element={<Contacto />} path="/contactos" />
                <Route element={<Intructores />} path="/instructores" />
                <Route element={<Cursos />} path="/cursos" />
            </Route>
        </>
    )
);