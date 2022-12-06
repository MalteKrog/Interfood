import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import "./footer.css"

import Logo from '../assets/interfood-logo.png'

const Footer = () => {
    const [active, setActive] = useState("ul");
    const [activetwo, setActivetwo] = useState("ul-interfood");
    const [activethree, setActivethree] = useState("ul-konto");
    const [activefour, setActivefour] = useState("ul-links");
    const [toggleDropdown, setToggleDropdown] = useState("ul-flexbox");

    const footerToggle = () => {
        active === "ul" 
        ? setActive("ul ul-active")
        : setActive("ul");

        activetwo === "ul-interfood" 
        ? setActivetwo("ul-interfood")
        : setActivetwo("ul-interfood");

        activethree === "ul-konto" 
        ? setActivethree("ul-konto")
        : setActivethree("ul-konto");

        activefour === "ul-links" 
        ? setActivefour("ul-links")
        : setActivefour("ul-links");

        toggleDropdown === "ul-flexbox"
        ? setToggleDropdown("ul-flexbox-active")
        : setToggleDropdown("ul-flexbox");
    };

    const footerToggleInterfood  = () => {
        active === "ul" 
        ? setActive("ul")
        : setActive("ul");

        activetwo === "ul-interfood" 
        ? setActivetwo("ul-interfood ul-interfood-active")
        : setActivetwo("ul-interfood");

        activethree === "ul-konto" 
        ? setActivethree("ul-konto")
        : setActivethree("ul-konto");

        activefour === "ul-links" 
        ? setActivefour("ul-links")
        : setActivefour("ul-links");

        toggleDropdown === "ul-flexbox"
        ? setToggleDropdown("ul-flexbox-active")
        : setToggleDropdown("ul-flexbox");
    };

    const footerToggleKonto  = () => {
        active === "ul" 
        ? setActive("ul")
        : setActive("ul");

        activetwo === "ul-interfood" 
        ? setActivetwo("ul-interfood")
        : setActivetwo("ul-interfood");

        activethree === "ul-konto" 
        ? setActivethree("ul-konto ul-konto-active")
        : setActivethree("ul-konto");

        activefour === "ul-links" 
        ? setActivefour("ul-links")
        : setActivefour("ul-links");

        toggleDropdown === "ul-flexbox"
        ? setToggleDropdown("ul-flexbox-active")
        : setToggleDropdown("ul-flexbox");
    };

    const footerToggleLinks  = () => {
        active === "ul" 
        ? setActive("ul")
        : setActive("ul");

        activetwo === "ul-interfood" 
        ? setActivetwo("ul-interfood")
        : setActivetwo("ul-interfood");

        activethree === "ul-konto" 
        ? setActivethree("ul-konto ul-konto")
        : setActivethree("ul-konto");

        activefour === "ul-links" 
        ? setActivefour("ullinks ul-links-active")
        : setActivefour("ul-links");

        toggleDropdown === "ul-flexbox"
        ? setToggleDropdown("ul-flexbox-active")
        : setToggleDropdown("ul-flexbox");
    };

  return (
    <footer>
        <div className='top-line'></div>
        <div className='footer'>
            <div className='logo-box'>
                <img className='logo' src={Logo} alt="Interfood Logo"/>
            </div>
            <div className='mobil-flexbox'>
                <div onClick={footerToggle} className={toggleDropdown}>
                    <h3>Navigation</h3>
                    <ul className={active}>
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
                <div onClick={footerToggleInterfood} className={toggleDropdown}>
                <h3>Interfood</h3>
                    <ul className={activetwo}>
                        <li className='footer-li'>Krogsgårdsvej 6 8620 Kjellerup</li> 
                        <li className='footer-li'>Telefon: 50 37 81 85</li>  
                        <li className='footer-li'>Mail: kontakt@interfood.dk</li> 
                    </ul>
                </div>
                <div onClick={footerToggleKonto} className={toggleDropdown}>
                    <h3>Min Konto</h3>
                    <ul className={activethree}>
                        <li className='footer-li'>Log ind</li> 
                        <li className='footer-li'>Bliv Erhvervskunde</li>  
                    </ul>
                </div>
                <div onClick={footerToggleLinks} className={toggleDropdown}>
                    <h3>Links</h3>
                    <ul className={activefour}>
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