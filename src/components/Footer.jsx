import React from 'react'
import instagram from './img/instagram-logo.png'
import facebook from './img/facebook-logo.png'
import google from './img/google-logo.png'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import MainColor from '../constants/constants.js'

const Footer = () => {
  return (
    <FooterSection>
    <Container>
      
      </Container>
      <MiddleContainer>
        <Title>Följ Amina på sociala medier</Title>
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
          <a href="https://www.facebook.com/profile.php?id=100069400555787" target="_blank">
            <Logo 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            src={facebook} 
            alt="Facebook"/>
            </a>
        </div>
      </MiddleContainer>
      <Container>

      </Container>
        </FooterSection>
  )
}

const FooterSection = styled.footer`
  width: 100%;
  min-height: 30vh;
  background-color: ${MainColor};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Container = styled.div`
  color: white;
`;

const MiddleContainer = styled.div`
  color: white;
  min-width: 40%;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  border-left: 1px solid white;
  border-right: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h3`
  font-size: 20px;
`;

const Logo = styled(motion.img)`
  width: 40px;
  margin: 10px;
`;


export default Footer
