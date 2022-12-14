import React from 'react';
import './staff.css';
import ansat1 from '../../assets/img/ansat1.png';
import ansat2 from '../../assets/img/ansat2.png';
import ansat3 from '../../assets/img/ansat3.png';
import ansat4 from '../../assets/img/ansat4.png';
import { FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagram } from "react-icons/fa";



export const Staff = () => {

    return (
        <section className="staffcontainer">
            <div className="staffsection">
        <h1>Vores team</h1>
        </div>

        <div class="staffrow">

            {/* Første medarbejder */}
            <div className="staffcolumn">
                <div className="team">
                    <div className="team-img">
                        <img src={ansat1} alt="første ansat"></img>
                    </div>
                    <div className="team-content">
                        <h2>Michael Tuan Hoang</h2>
                        <h3>Administrerende Direktør</h3>
                        <p>Har ansvaret for den daglige ledelse og drift i Interfood ApS.</p>
                        <h4>mth@interfood.dk</h4>
                    </div>
                    <div className="team-social">
                        <a href="www.google.dk" className="social-fb"><FaFacebook /></a>
                        <a href="www.google.dk" className="social-li"><FaLinkedin /></a>
                        <a href="www.google.dk" className="social-tw"><FaTwitterSquare /></a>
                        <a href="www.google.dk" className="social-ig"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Anden medarbejder */}
            <div className="staffcolumn">
                <div className="team">
                    <div className="team-img">
                        <img src={ansat2} alt="første ansat"></img>
                    </div>
                    <div className="team-content">
                        <h2>Nao Liu Zhang</h2>
                        <h3>(Key) Account Manager</h3>
                        <p>Kundeansvarlig og står for bogholderi, logistik og regnskab hos Interfood ApS. </p>
                        <h4>nlz@interfood.dk</h4>
                    </div>
                    <div className="team-social">
                        <a href="www.google.dk" className="social-fb"><FaFacebook /></a>
                        <a href="www.google.dk" className="social-li"><FaLinkedin /></a>
                        <a href="www.google.dk" className="social-tw"><FaTwitterSquare /></a>
                        <a href="www.google.dk" className="social-ig"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Tredje medarbejder */}
            <div className="staffcolumn">
                <div className="team">
                    <div className="team-img">
                        <img src={ansat3} alt="første ansat"></img>
                    </div>
                    <div className="team-content">
                        <h2>Thor Dahl</h2>
                        <h3>IT Specialist</h3>
                        <p>Opdaterer og udskifter it-systemer, samt håndterer sociale medie og SEO optimering.</p>
                        <h4>td@interfood.dk</h4>
                    </div>
                    <div className="team-social">
                        <a href="www.google.dk" className="social-fb"><FaFacebook /></a>
                        <a href="www.google.dk" className="social-li"><FaLinkedin /></a>
                        <a href="www.google.dk" className="social-tw"><FaTwitterSquare /></a>
                        <a href="www.google.dk" className="social-ig"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Fjerde medarbejder */}
            <div className="staffcolumn">
                <div className="team">
                    <div className="team-img">
                        <img src={ansat4} alt="første ansat"></img>
                    </div>
                    <div className="team-content">
                        <h2>Yutaka Hoang</h2>
                        <h3>Stifter af Interfood</h3>
                        <p>Stifter og tidligere direktør for Interfood ApS. Hjælper med kundehåndtering.</p>
                        <h4>yth@interfood.dk</h4>
                    </div>
                    <div className="team-social">
                        <a href="www.google.dk" className="social-fb"><FaFacebook /></a>
                        <a href="www.google.dk" className="social-li"><FaLinkedin /></a>
                        <a href="www.google.dk" className="social-tw"><FaTwitterSquare /></a>
                        <a href="www.google.dk" className="social-ig"><FaInstagram /></a>
                    </div>
                </div>
            </div>


        </div>
        </section>
    )
};
