import React from 'react'
import instagram from './img/instagram.png'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterSection>
      <a href="https://www.instagram.com/aminasmakar/" target="_blank">
        <Logo src={instagram}/></a>
        </FooterSection>
  )
}

const FooterSection = styled.footer`
  position: sticky;
  bottom: 0;
  padding-left: 2%;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 25px;
  height: 40px;
`;

const Logo = styled.img`
  display: none;

  @media only screen and (min-width: 900px){
      display: block;
      height: 100%;
      background-color: white;
      padding: 3px;
      border-radius: 5px;

      &:hover {
        opacity: 0.7;
      }
  }
`;

export default Footer
