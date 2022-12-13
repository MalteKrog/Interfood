import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input'


/* Prøver at bruge et library kaldet "React phone number input - 
søg evt på nettet efter det - virker ikke så godt pt" */

const Reactphone = () => {
  const [value, setValue] = useState();
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue} />
  )
};

export default Reactphone;

/* Startet på en kontakt formular, den virker til min mail cthrige@gmail.com
Kan vi godt fortsætte med, bare ik spam mig hehe */

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
      <h1 className="kontakttitle">Kontakt</h1>
      <Container>
        <Row className="contactcontainer">
          <Col>
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
                      <label>Emne</label>
                      <input type="text" name="from_name" />
                      <label>Message</label>
                      <textarea name="message" />
                      <input className="kontaktbtn" type="submit" value="Send" />
                    </form>
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
          <Col>
            <div className="kontaktkort-container">
              <div className="kontaktcards">
                <div className="kontaktkort kkort1">
                  <h2>Test</h2>
                  <p>Lidt tekst lol lol</p>
                </div>
                <div className="kontaktkort kkort2">
                  <h2>Test</h2>
                  <p>Lidt tekst lol lol</p>
                </div>
                <div className="kontaktkort kkort3">
                  <h2>Test</h2>
                  <Reactphone />
                </div>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}
