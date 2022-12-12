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
    const [isOpen, setOpen] = useState(false);

    const navToggle = () => {
        active === "nav-menu"
            ? setActive("nav-menu nav-active")
            : setActive("nav-menu");

        toggleIcon === "nav-toggler"
            ? setToggleIcon("nav-toggler toggle")
            : setToggleIcon("nav-toggler");
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
                        <NavLink className="nav-link" to="/products">
                            Produkter
                        </NavLink>

                        {NavData.map(({ id, title, underpunkt, underpunkt1, underpunkt2, underpunkt3, underpunkt4, underpunkt5, underpunkt6, underpunkt7, underpunkt8, underpunkt9, underpunkt10, underpunkt11, underpunkt12, underpunkt13, underpunkt14 }, i) => (
                            <>
                                <div className="product-item" key={id} index={i}>
                                    <div className="product-title" onClick={() => toggle(i)}>
                                        <h4>{title}</h4>
                                        <div>{isVisible === i ? '-' : '+'}</div>
                                    </div>
                                    {isVisible === i &&
                                        <div className="product-content">
                                            <div className='product-header'>
                                                <NavLink to="/products">
                                                    <h5>{underpunkt}</h5>
                                                </NavLink>
                                                <h5>{underpunkt1}</h5>
                                                <h5>{underpunkt2}</h5>
                                                <h5>{underpunkt3}</h5>
                                                <h5>{underpunkt4}</h5>
                                                <h5>{underpunkt5}</h5>
                                                <h5>{underpunkt6}</h5>
                                                <h5>{underpunkt7}</h5>
                                                <h5>{underpunkt8}</h5>
                                                <h5>{underpunkt9}</h5>
                                                <h5>{underpunkt10}</h5>
                                                <h5>{underpunkt11}</h5>
                                                <h5>{underpunkt12}</h5>
                                                <h5>{underpunkt13}</h5>
                                                <h5>{underpunkt14}</h5>
                                            </div>
                                        </div>}
                                </div>

                            </>
                        ))}
                        <NavLink className="nav-link" to="/">
                            Hjem
                        </NavLink>
                        <NavLink className="nav-link" to="/about">
                            Om os
                        </NavLink>
                        <NavLink className="nav-link" to="/contact">
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