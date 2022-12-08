import React from 'react'
import { NavLink } from 'react-router-dom'
import "./footer.css"

import Logo from '../assets/interfood-logo.png'

const Footer = () => {


    return (
        <footer>
            <div className='top-line'></div>
            <div className='footer'>
                <div className='logo-box'>
                    <img className='logo' src={Logo} alt="Interfood Logo" />
                    <p>@2010 - 2020 <br />
                        Privacy - Terms</p>
                </div>
                <div className='mobil-flexbox'>
                    <div className='footer-section'>
                        <h3>Navigation</h3>
                        <ul className="ul-box">
                            <NavLink to="/">
                                Hjem
                            </NavLink>
                            <NavLink to="/products">
                                Produkter
                            </NavLink>
                            <NavLink to="/about">
                                Om os
                            </NavLink>
                            <NavLink to="/contact">
                                Kontakt
                            </NavLink>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h3>Interfood</h3>
                        <ul className="ul-box">
                            <li className='footer-li'>Krogsgårdsvej 6 8620 Kjellerup</li>
                            <li className='footer-li'>Telefon: 50 37 81 85</li>
                            <li className='footer-li'>Mail: kontakt@interfood.dk</li>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h3>Min Konto</h3>
                        <ul className="ul-box">
                            <li className='footer-li'>Log ind</li>
                            <li className='footer-li'>Bliv Erhvervskunde</li>
                        </ul>
                    </div>
                    <div className='footer-section'>
                        <h3>Links</h3>
                        <ul className="ul-box">
                            <li className='footer-li'>Fordele</li>
                            <li className='footer-li'>Bankinformationer</li>
                            <li className='footer-li'>Smiley-rapport</li>
                            <li className='footer-li'>Job</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bottom-line'></div>
        </footer>
    )
}

export default Footer