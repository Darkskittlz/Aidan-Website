import React, {useState, useRef } from 'react';
import styled from "styled-components";
import ParticleBackground from '../../ParticleBackground';
import useStyles from './styles';
import FooterComponent from '../Footer/Footer';
import { Button } from 'reactstrap';
import emailjs from '@emailjs/browser';



const Row = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 999;
  border: 2px solid black;
  margin-bottom: 20px;
`

const Col = styled.div`
  display: flex;
  z-index: 999;

  img {
    width: 600px;
    border-radius: 10px;
    opacity: 1;
    backdrop-filter: blur(10px);
  }
`

const Col2 = styled.div`
  display: flex;
  border-radius: 10px;
  margin-left: 20px;
  opacity: 0.9;
  backdrop-filter: blur(10px);
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  z-index: 999;

`

const Col2Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 999;
  justify-content: center;
  align-content: center;

  h1 {
    margin-bottom: 25px;
    text-align: center;
    text-decoration: underline;
    color: white;
  }

  h3 {
    text-align: left;
    margin: 20px;
    font-size: 25px;
    color: white;
  }
`

const ButtonContainer = styled.div`
  display: flex; 
  width: 100%;
  justify-content: center;
`

const ContactForm = styled.div`
  display: flex; 
  justify-content: center;
  flex-direction: column;

    h2 {
        color: white;
        text-align: center;
        font-size: 80px;
    }

    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    input {
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }

    span {
        color: white;
        display: flex;
        justify-content: center;
    }

`

export function Contact() {
    const [message,setMessage] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setMessage(true)

    emailjs.sendForm(
        'service_wigaog9', 
        'template_f7p5sjq',
        form.current,
        'user_5ir65fREMKq7eQSSWuTYq',
        )
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
         }, (err) => {
            console.log('FAILED...', err.text);
         });
        e.target.reset();
    }
    return (
        <ContactForm>
            <h2>Contact</h2>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="NAME" />
                <input type="email" name="user_email" placeholder="EMAIL" />
                <textarea name="message" placeholder="MESSAGE" />
                <input id="send" type="submit" value="Send" />
                {message && <span>Thanks, I'll reply ASAP :)</span>}
            </form>
        </ContactForm>
    )
}


const Bookings = () => {
    const classes = useStyles();
return (
    <main className={classes.content}>
    <div className={classes.toolbar} />
      <ParticleBackground />
      <Row>
        <Col>
          <img src="https://static.wixstatic.com/media/e80a20_1ea23104b49343b592cba7a5df8b0d48~mv2.png/v1/fill/w_490,h_660,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/e80a20_1ea23104b49343b592cba7a5df8b0d48~mv2.webp" />
        </Col>
        <Col2>
            <Contact />
        </Col2>
      </Row>
      <Row>
        <Col2>
            <ButtonContainer>
                <Button 
                aria-label="Headshot" 
                target="_blank" 
                href="https://www.aidanpaulmusic.com/_files/ugd/e80a20_8e1c035cb7df43339fe0a1eda94ee802.pdf" 
                cursor="pointer"
                color="dark"
                margin-right="20px"
                >Headshot</Button>

                <Button 
                aria-label="Resume" 
                target="_blank" 
                href="https://www.aidanpaulmusic.com/_files/ugd/e80a20_7b2098ce624545b0a4038a43404f40e1.pdf" 
                cursor="pointer"
                color="dark"
                >Resume</Button>
            </ButtonContainer>
        </Col2>
        <Col>
          <img src="https://static.wixstatic.com/media/e80a20_294e25768ad341008fcf7d31fb6dacd8~mv2.jpg/v1/fill/w_490,h_800,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/e80a20_294e25768ad341008fcf7d31fb6dacd8~mv2.webp" />
        </Col>
      </Row>
  
  
  
      <FooterComponent />
    </main>
  );
};

export default Bookings;
