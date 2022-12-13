import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

/* Startet på en kontakt formular, den virker til min mail cthrige@gmail.com */

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lmb3z64', 'template_h78ix76', form.current, 'G7zZsOKAMUowl2Oa7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section className="contact" id="connect">
       <h2>Kontakt</h2>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <section className="container">
                    <div className="contact-box">
                      <div className="left">
                      <form ref={form} onSubmit={sendEmail}>
                      <input type="text" className="field" name="from_name" placeholder="Navn" />
                      <input type="email" className="field" name="email" placeholder="Email" />
                      <input type="subject" className="field" name="subject" placeholder="Emne" />
                      <textarea className="field" name="message" placeholder="Besked..." />
                      <input id="kontaktbtn" type="submit" value="Send" />
                      </form>
                      </div>
                      <div className="right"></div>
                    </div>
                  </section>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
