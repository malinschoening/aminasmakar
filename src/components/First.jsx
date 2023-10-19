import React from 'react'
import lightLogo from './img/logo-light.png'
import styled from 'styled-components'

const First = () => {
  return (
    <Container id="first">
      <Title>Skräddarsydda upplevelser för alla tillfällen</Title>
      <Logo src={lightLogo}/>
      </Container>
  )
}

const Container = styled.div`
  min-height: 20vh;
  padding-top: 70px;
  color: white;
  text-align: center;
  font-family: 'lato', 'roboto', serif;

  @media only screen and (min-width: 600px){
    min-height: 40vh;
  }

  @media only screen and (min-width: 900px){
    min-height: 45vh;
  }

  @media only screen and (min-width: 1200px){
    min-height: 60vh;
  }
`;

const Title = styled.h1`
  display: none;
  color: white;
  font-family: 'lato', 'roboto', sans-serif;

  @media only screen and (min-width: 600px){
    display: block;
    font-size: 3rem;
  }

  @media only screen and (min-width: 900px){
    display: block;
    font-size: 5rem;
  }
`;

const Logo = styled.img`
  display: block;
  width: 100%;
  width: 80%;
  margin: auto;

  @media only screen and (min-width: 600px){
    display: none;
  }
`;

export default First

