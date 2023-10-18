import React from 'react'
import instagram from './img/instagram.png'
import styled from 'styled-components'

const Contact = () => {
  return (
    <ContactSection>
    <Wrapper>
    <ContentContainer>
        <h2>Välkommen till Amina Smakar!</h2>
        <p>Välkommen, vad roligt att just du hittat hit! <br/><br/>Amina Smakar Catering erbjuder skräddarsydda matupplevelser för alla tillfällen. Vi leverar högkvalitativ catering till hela Stockholmsområdet, oavsett tillställning. <br/><br/>Med erfarenhet av allt från möhippor till företagsmingel erbjuds vällagad mat och ett professionellt genomförande, som är skonsamt för plånboken. <br/><br/>Utöver detta finns möjligheten till att hyra en privat kock för att uppleva ett riktigt restaurangbesök i ditt egna kök.</p>
    </ContentContainer>
    <ContentContainer>
      <h2>Kontakt</h2>
      <p>För bokning eller frågor hänvisar jag till min mail: <b>
      <Link href="mailto:aminasmakar@gmail.com" target="_blank">aminasmakar@gmail.com</Link></b></p>
      <a href="https://www.instagram.com/aminasmakar/" target="_blank">
      <Image src={instagram}/></a><br/>
    </ContentContainer>
    </Wrapper>
</ContactSection>

  )
}

const ContactSection = styled.section`
  padding-top: 2%;
  min-height: 60vh;
  width: 100%;
  display: grid;
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
`;

const Link = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    color:rgb(105, 105, 105);
  }
`;

const Image = styled.img`
  width: 40%;
`;

export default Contact
