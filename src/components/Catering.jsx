import React from 'react'
import landscape from './img/food/landscape.jpg'
import food1 from './img/food/3.jpg'
import food2 from './img/food/6.jpg'
import food3 from './img/food/7.jpg'
import food4 from './img/food/11.jpg'
import styled from 'styled-components'


const Catering = () => {
  return (
    <CateringSection>
      <h4>CATERING</h4>
    <Wrapper>
      <ContentContainer>
        <h2>
          <b>Hyr en privat kock för en smakupplevelse eller boka catering till ditt nästa event!</b>
          </h2>
        
        <p>
            För att få ut det bästa av matupplevelsen gör vi alltid skräddarsydda menyer anpassade efter just din vision och behov. En kuvertavgift anpassas baserat på vilket menyalternativ vi landar i. <br/><br/>
            Vi erbjuder allt från smörgåstårtor, bufféer och mingelmat till färdiga matlådor och avsmakningsmenyer. <br/><br/>
            För att veta mer går det alldeles utmärkt att skicka in en offertförfrågan. Kika gärna under fliken "Tidigare uppdrag" för inspiration! 
        </p><ImageLandscape src={landscape}/>
    </ContentContainer>
    <ContentContainer>
        <ImagePortrait src={food1}/>
        <ImagePortrait src={food2}/>
        <br/>
        <ImagePortrait src={food3}/>
        <ImagePortrait src={food4}/>
        
    </ContentContainer>
  </Wrapper>
</CateringSection>
  )
}

const CateringSection = styled.section`
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
  margin-top: 20px;
  padding: 2%;

  @media only screen and (min-width: 600px){
    width: 90%;
    margin-top: 0px;
    margin-bottom: 0px;
    border: none;
    padding: 2%;
    padding-right: 5%;
  }
`;

const ImageLandscape = styled.img`
  display: none;

  @media only screen and (min-width: 1200px){
    width: 100%;
    display: block;
  }
`;

const ImagePortrait = styled.img`
  width: 100%;

  @media only screen and (min-width: 600px){
    width: 48%;
    margin: 1%;
  }
`;

export default Catering
