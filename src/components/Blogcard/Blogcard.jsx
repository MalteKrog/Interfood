import React, { useState } from 'react'; 
import {NavLink } from 'react-router-dom';
import "./Blogcard.css"; 

/* Jeg har bare startet på den */

const Blogcard = () => {

    const [toggleState, setToggleState] = useState(0); 

    const toggleTab = (index) => {
        setToggleState(index); 
    }

  return (
    <section className="blogcard section" id="services">
        <div className="blogcard__container container grid">
            <div className="blogcard__content">
                    <div>
                        <i className="uil uil-arrow blogcard__icon"></i>
                        <h3 className="Blogcard-title">Kort overskrift</h3>
                    </div>
                    <span className="blogcard__button" onClick={() => toggleTab(1)}>
                        <NavLink to="#">læs mere</NavLink></span>
            </div>
        </div>
    </section>
  ); 
}; 

export default Blogcard