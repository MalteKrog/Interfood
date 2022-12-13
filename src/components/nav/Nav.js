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

    const [isVisible, setIsVisible] = useState(null);

    const toggle = (i) => {
        if (isVisible === i) {
            setIsVisible(null)
        }
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