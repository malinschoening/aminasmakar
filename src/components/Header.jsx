import React, { useState } from 'react'
import lightLogo from './img/logo-light.png'
import mobileLogo from './img/mobile-menu-logo.png'
import { motion } from "framer-motion"
import styled from 'styled-components'

const Header = () => {

const header = document.getElementsByTagName('header');
window.onscroll = function() {headerScroll()};

function headerScroll() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    header[0].classList.add('scroll');
    header[0].classList.remove('top');

  } else {
    header[0].classList.remove('scroll');
    header[0].classList.add('top');
  }
}

  const [hamburger, setHamburger] = useState(false)

  return (
    <>
    <header id="header" className="top">
        <img id="logo" src={lightLogo} />
            <nav id="main-nav">
            <ul>
                <li><a href="#catering">CATERING</a></li>
                <li><a href="#contact">KONTAKT</a></li>
                <li><a href="#portfolio">TIDIGARE UPPDRAG</a></li>
                <li><a href="#about">OM MIG</a></li>
            </ul>
        </nav>
    </header>
    <header id="mobile-header" >
      <motion.img src={mobileLogo}
      onClick={() => setHamburger(!hamburger)}
      animate={{
        rotate: hamburger ? 90 : 0
      }}/>
            <ul id="mobile-ul" className={hamburger ? 'open' : 'closed'}>
                <li><a href="#catering">CATERING</a></li>
                <li><a href="#contact">KONTAKT</a></li>
                <li><a href="#portfolio">TIDIGARE UPPDRAG</a></li>
                <li><a href="#about">OM MIG</a></li>
            </ul>
    </header>
    </>
  )
}

const HeaderSection = styled.header`
  width: 100%;
  display: none;
`;

const MobileHeader = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: black;
  height: 55px;
  width: 120vw;
`;

const Logo = styled.img`

`;

const Hamburger = styled(motion.img)`
  width: 40px;
  padding: 8px;
`;

const Navigation = styled.nav`
  font-size: 1.4rem;
    width: 100%;
    text-align: center;

    &a {
      color: white;
      text-decoration: none;
    }

    &ul li {
      display: inline;
      list-style: none;
      padding-right: 3%;
    }
`;

const MobileNav = styled.ul`
  padding-top: 15px;
  list-style-type: none;
  color: white;
  font-size: calc(15px + 0.890625vw);

  &.open {
    display: inline;
    position: absolute;
    left: 0;
    background-color: black;
    padding-right: 40px;
    opacity: 0.9;
    border-bottom-right-radius: 10px;
    padding-bottom: 20px;
    margin-top: 55px;
  }

  &.closed {
    display: none;
  }
`;


export default Header
