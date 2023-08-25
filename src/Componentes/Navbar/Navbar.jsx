import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="images/logo.png" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src="src/assets/icons/hamburger.svg" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/Cursos">Cursos</NavLink>
            </li>
            <li>
              <NavLink to="/Instructores">Instructores</NavLink>
            </li>
            <li>
              <NavLink to="/Contactos">Contactos</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <br></br>
      <Outlet />
      <Footer />
    </nav>
  )
}

export default Navbar