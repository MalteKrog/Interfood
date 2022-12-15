import React from 'react';
import "./nav.css";
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../../assets/interfood-logo.png';
import { CgProfile } from 'react-icons/cg';
import NavData from './NavData';

const Nav = () => {
    const [active, setActive] = useState("nav-menu");
    const [toggleIcon, setToggleIcon] = useState("nav-toggler");

    const [product, setNav] = useState("nav-dropdown");

    const navToggle = () => {
        active === "nav-menu"
            ? setActive("nav-menu nav-active")
            : setActive("nav-menu");

        toggleIcon === "nav-toggler"
            ? setToggleIcon("nav-toggler toggle")
            : setToggleIcon("nav-toggler");
    };

    const productToggle = () => {
        product === "nav-dropdown"
            ? setNav("nav-dropdown nav-dropdown-active")
            : setNav("nav-dropdown");
    };

    // Her finder vi browserens width og gemmer den i variablen "width"
    var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    // Hvis vi er på mobil str. skal nav items være lukket som standard men kan åbnes 
    //Hvis man er over 600px i width så skal nav items være åbne som standard og kan ikke lukkes


    // Denne sætter "isVisible" til null som standard - dermed er nav items lukket på mobil
    const [isVisible, setIsVisible] = useState(null);
    // "isOpen" er sat til false som standard - denne bruges til computer
    const [isOpen, setIsOpen] = useState(false);

    // Vi vil gerne sørge for at man kan åbne og lukke nav items på mobil, men at de altid er åbne på computer
    // Derfor bruger vi useEffect, da den kører functionen ved browser load
    // Vi tager parameteren "i" med ind som er indexet af de nav items vi trykker på
    // På linje 88 kører vi en function onClick "toggle" der sætter "i" til indexet af det nav item vi trykker på
    useEffect((i) => {
        // tjekker "width" er over 600px
        if (width > 600) {
            // Hvis width er over 600 bliver "setIsOpen" = true og derfor er alle nav items åbne på computer
            setIsOpen(true)
            console.log(width)
            // Tjekker om width er under 600 og isVisible er ligmed "i" (det index man trykker på)
        } else if (width < 600 && isVisible === i) {
            // Så er vi på mobil og derfor sætter "setIsopen" = false
            setIsOpen(false)
            // Sætter "setIsVisible" = det index man trykker på
            setIsVisible(i)
            console.log("closed")
        }
        // Hvis "isVisible" ikke er ligmed indexet (at du klikker på et andet nav item en der er åben)
        // Lukker den den tidligere og åbner nye
        else if (!isVisible === i)
        // Åbner det nye navitem
            setIsVisible(null)
            console.log("open", isVisible)
        }, [isVisible, width]);

        // Denne function åbner og lukker nav items på mobil
    const toggle = (i) => {
        // Hvis vi er på computer så stopper functionen her
        if (width > 600) {
            return
        }
        // Hvis width er under 600px (mobil) og "i" (indexet) = "isVisible" skal den åbne
        else if (width < 600 && isVisible === i) {
            setIsVisible(null)
        }
        // ellers skal den lukke
        else 
            setIsVisible(i)
        console.log(isVisible)
    }

    return (
        <nav>
            <div className='nav'>
                <div className={active}>
                    <div className='navigation-container'>
                        <h3 className="nav-link products" to="/products" onClick={productToggle} >
                            Produkter
                        </h3>
                        <div className={product}>

                            {NavData.map(({ id, title, underpunkt, underpunkt1, underpunkt2, underpunkt3, underpunkt4, underpunkt5, underpunkt6, underpunkt7, underpunkt8, underpunkt9, underpunkt10, underpunkt11, underpunkt12, underpunkt13, underpunkt14 }, i) => (
                                <>
                                    <div className="product-item" key={id} index={i}>
                                        <div className="product-title" onClick={() => toggle(i)}>
                                            <h4>{title}</h4>
                                            <div className='open'>{isVisible === i ? '-' : '+'}</div>
                                        </div>
                                        {isOpen === true &&
                                            <div className="product-content">
                                                <div className='product-header'>
                                                    <NavLink to="/products">
                                                        <h5 onClick={navToggle}>{underpunkt}</h5>
                                                    </NavLink>
                                                    <h5 onClick={navToggle}> {underpunkt1}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt2}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt3}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt4}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt5}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt6}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt7}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt8}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt9}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt10}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt11}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt12}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt13}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt14}</h5>
                                                </div>
                                            </div>}
                                        {isVisible === i &&
                                            <div className="product-content">
                                                <div className='product-header'>
                                                    <NavLink to="/products">
                                                        <h5 onClick={navToggle}>{underpunkt}</h5>
                                                    </NavLink>
                                                    <h5 onClick={navToggle}> {underpunkt1}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt2}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt3}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt4}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt5}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt6}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt7}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt8}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt9}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt10}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt11}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt12}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt13}</h5>
                                                    <h5 onClick={navToggle}> {underpunkt14}</h5>
                                                </div>
                                            </div>}
                                    </div>
                                </>
                            ))}
                        </div>
                        <NavLink className="nav-link" to="/" onClick={navToggle}>
                            Hjem
                        </NavLink>
                        <NavLink onClick={navToggle} className="nav-link om-os" to="/about">
                            Om os
                        </NavLink>
                        <NavLink onClick={navToggle} className="nav-link" to="/contact">
                            Kontakt
                        </NavLink>
                    </div>
                </div>
                <div className='nav-logo'>
                    <NavLink to="/">
                        <img className="logo" src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className='nav-profile'>
                    <h4 className='log-ind'>Log ind</h4>
                    <CgProfile />
                </div>
            </div>

            <div onClick={navToggle} className={toggleIcon}>
                <div className="lineone"></div>
                <div className="linetwo"></div>
                <div className="linethree"></div>
            </div>
        </nav>
    )
}

export default Nav