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
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Kontakt mig!</h2>
                  <Row>
                    <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="from_name" />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input className="kontaktbtn" type="submit" value="Send" />
                  </form>
                  </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
