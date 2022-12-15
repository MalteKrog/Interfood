import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


/* Prøver at bruge et library kaldet "React phone number input - 
søg evt på nettet efter det - virker ikke så godt pt" */

const Reactphone = () => {
  const [value, setValue] = useState();
return (
  <PhoneInput
    classnName="phoneInput"
    country={'dk'}
    defaultCountry="DK"
    placeholder="Enter phone number"
    value={value}
    onChange={value=>setValue(value)}
    displayInitialValueAsLocalNumber
    />
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
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

              <section className="container">
                <div className="contact-box">
                <h2>Kontakt</h2>

                    {/* Kontakt formularboksen */}
                        <div className="left">
                        <form ref={form} onSubmit={sendEmail}>
                        <input type="text" className="field" name="from_name" placeholder="Navn" />
                        <input type="email" className="field" name="email" placeholder="Email" />
                        <input type="subject" className="field" name="subject" placeholder="Emne" />
                        <textarea className="field" name="message" placeholder="Besked..." />
                        <input id="kontaktbtn" type="submit" value="Send" />
                        </form>
                        </div>
                </div>
                s
                 {/* 3 bokse med */}
                 <div className="container">
                    <div className="right">

                        <div class="box">
                          <p>Vi glæder os til at høre fra dig! Kontakt os på følgende nummer</p>
                        <strong>+45 50 37 81 85</strong>
                        </div>

                   

                        <div class="box">
                          <p>Ønsker du at sende os en mail, kan du gøre det på følgende mail</p>
                        <strong>info@interfood.dk</strong>
                        </div>

            

                        <div class="box">
                          <p>Skriv dit nummer</p>
                        <strong>Så ringer vi dig op - når vi har en ledig kollega</strong>
                        <br>  
                        </br>
                        <PhoneInput />
                        </div>
                        </div>
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
