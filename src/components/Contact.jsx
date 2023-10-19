import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import instagram from './img/instagram-dark.png'
import facebook from './img/facebook-dark.png'
import google from './img/google-dark.png'

const Contact = () => {
  return (
    <ContactSection id="contact">
    <Wrapper>
    <ContentContainer>
        <h2>Välkommen till Amina Smakar!</h2>
        <p>Välkommen, vad roligt att just du hittat hit! <br/><br/>Amina Smakar Catering erbjuder skräddarsydda matupplevelser för alla tillfällen. Vi leverar högkvalitativ catering till hela Stockholmsområdet, oavsett tillställning. <br/><br/>Med erfarenhet av allt från möhippor till företagsmingel erbjuds vällagad mat och ett professionellt genomförande, som är skonsamt för plånboken. <br/><br/>Utöver detta finns möjligheten till att hyra en privat kock för att uppleva ett riktigt restaurangbesök i ditt egna kök.</p>
    </ContentContainer>
    <ContentContainer>
      <h2>Kontakt</h2>
      <p>För bokning eller frågor hänvisar jag till min mail: <b>
      <Link href="mailto:aminasmakar@gmail.com" target="_blank">aminasmakar@gmail.com</Link></b></p>
      <SocialMediaContainer>
        <h2>Sociala Medier</h2>
        <div>
          <a href="https://www.instagram.com/aminasmakar/" target="_blank">
            <Logo 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            src={instagram} 
            alt="Instagram"/>
            </a>
          <a href="https://www.google.com/search?sca_esv=574851237&rlz=1C5CHFA_enSE920SE920&q=Amina+Smakar+Catering&si=ALGXSlYtAR3dRxrzsaLzOp4xIy6NiU_P028OdiXjuPyCNfY-NMBthnodpH9OwSqUcp2UVZn9-9yzii1leNVGrvdoFinEdpeCsQQUqm6W5fBL4dxAxeP5t2xfg9qHIILS6nqo1iIa1ID7TS1nWqRJSZru8x-S2D0VXYscN7KU8I6GZ_jemZNkU4L8gMYnoBVcAtBYk9FEKPxW2qFQTeffNB9Z_V5tEJP4BA%3D%3D&sa=X&ved=2ahUKEwiT-9e5s4KCAxXlXfEDHZXlDdAQ6RN6BAggEAE&biw=1440&bih=671&dpr=2" target="_blank">
            <Logo 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            src={google} 
            alt="Google"/>
            </a>
          <a href="">
            <Logo 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            src={facebook} 
            alt="Facebook"/>
            </a>
            </div>
      </SocialMediaContainer>
    </ContentContainer>
    </Wrapper>
</ContactSection>

  )
}

const ContactSection = styled.section`
  min-height: 60vh;
  width: 100%;
  display: flex;
`;

const Wrapper = styled.div`
  flex-direction: column;
  width: 100%;
  min-height: 30vh;
  display: flex;
  padding-right: 2%;
  padding-left: 2%;
  justify-content: center;
  background-color: white;

  @media only screen and (min-width: 900px){
    flex-direction: row;
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  margin-top: 0px;
  margin-bottom: 0px;
  border: none;
  padding: 2%;
  padding-right: 5%;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (min-width: 900px){
    width: 48%;
  }
`;

const Link = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    color:rgb(105, 105, 105);
  }
`;

const SocialMediaContainer = styled.div`
  background-color:rgb(214, 214, 214);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 20vh;
  border-left: 3px solid rgb(105, 105, 105);
  gap: 10px;
`;

const Logo = styled(motion.img)`
  width: 40px;
  margin: 10px;
`;

export default Contact
