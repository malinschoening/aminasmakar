import React from 'react'
import profilepicture from './img/profilbild.jpg'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutSection id="about">
    <h4>OM MIG</h4>
    <Wrapper>
    <LeftContent>
        <Image src={profilepicture}/>
    </LeftContent>
    <RightContent>
      <h2>Om Amina</h2>
      <p>Jag som startar och driver företaget heter Amina. Hela mitt liv har matlagning varit en väldigt väsentlig del av vardagen och aldrig i mina vildaste drömmer hade jag kunnat tro att jag en dag skulle kunna driva ett eget företag, med fokus på mat. <br/><br/>Allt började med ett matkonto på Instagram där jag publicerade mat jag lagade för skojs skull. Allt eftersom växte kontot. Vänner och bekanta började boka mig till olika tillställningar och till slut startades Amina Smakar Catering i december 2022. <br/><br/>På väldigt kort tid har verksamheten vuxit och med lite envishet, mycket kreativitet och en "nu-jävlar-kör-vi" inställning är allt möjligt. Mat är min passion, min glädje och min terapi och jag hoppas att jag kan fortsätta sprida det till ännu fler människor.</p>
    </RightContent>
    </Wrapper>
</AboutSection>
  )
}

const AboutSection = styled.section`
  width: 100%;
  display: grid;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 30vh;
  display: flex;
  padding-right: 2%;
  padding-left: 2%;
  justify-content: center;
  background-color: white;
`;

const LeftContent = styled.div`
  display: none;
  margin-top: 20px;
  padding: 2%;

  @media only screen and (min-width: 900px){
      width: 30%;
      display: block;
  }
`;

const RightContent = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 2%;
  padding-right: 5%;
`;

const Image = styled.img`
  width: 100%;
`;

export default About
