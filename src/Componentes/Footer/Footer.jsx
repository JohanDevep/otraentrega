import React from 'react'
import "./footer.css";

function Footer() {
  return (
   
    <div className="footer">
      <div className="container">
        <img className="solar-copyright" alt="Solar copyright" src="images/solar-copyright-broken-1.svg" />
        <p className="FundaSoft">
          <span className="text-wrapper">2023 FundaSoff Miss. </span>
          <span className="text-wrapper">Todos los derechos reservados</span>
        </p>
      </div>
      <div className="politicas">
        <div className="text-wrapper-2">Políticas de Cookies</div>
        <div className="text-wrapper-2">Términos y condiciones</div>
      </div>
    </div>
  
  )
}

export default Footer