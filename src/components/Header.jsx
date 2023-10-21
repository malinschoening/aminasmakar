import React, { useState } from 'react'
import { motion } from 'framer-motion'
import lightLogo from './img/logo-light.png'
import styled from 'styled-components'
import scrollToTopImage from './img/top.png'
import HamburgerMenu from './HamburgerMenu'
import Navigation from './Navigation'

const Header = () => {

  const [scroll, setScroll] = useState(true);

  window.onscroll = function() {headerScroll()};

  const headerScroll = () => {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    setScroll(false);

  } else {
    setScroll(true);
  }
}

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
    <DesktopHeader className={scroll ? 'top' : 'scroll'}>
        <Logo src={lightLogo} className={scroll ? 'top' : 'scroll'} />
        <Navigation headerView={true} scroll={scroll}/>
    </DesktopHeader>
    <MobileHeader>
      <HamburgerMenu />
    </MobileHeader>
    {scroll 
      ? ''
      : <TopLink 
          initial={{opacity: 0.6}}
          whileHover={{ scale: 1.1, opacity: 1.0 }}
          whileTap={{ scale: 0.9 }}
          src={scrollToTopImage} 
          alt="Arrow" 
          onClick={handleScrollToTop}/>
    }
    </>
  )
}

const DesktopHeader = styled.header`
  width: 100%;
  display: none;

  @media only screen and (min-width: 900px){
    height: 50px;
    display: flex;
    z-index: 1;

    &.top {
      display: flex;
      justify-content: space-between;
      top: 0;
    }

    &.scroll {
      opacity: 0.8;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgb(105, 105, 105);
      height: 80px;
      width: 100%;
      position: fixed;
      top: 0;
    }
  }

  @media only screen and (min-width: 1200px){
    height: 80px;
  }
  `;

  const Logo = styled.img`
  height: 50px;
  margin-left: 20px;

  @media only screen and (min-width: 600px){
    &.top {
      display: none;
    }
  }

  @media only screen and (min-width: 900px){
    &.top{
      height: 50px;
      padding-top: 20px;
      display: block;
      margin-left: 30px;
    }

    &.scroll {
      display: block;
      height: 50px;
      padding-top: 10px;
      margin-left: 20px;
    }
  }

  @media only screen and (min-width: 1200px){
    &.top {
      height: 90px;
      padding-left: 100px;
    }
  }
  `;

const MobileHeader = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: grey;
  height: 55px;
  width: 100%;

  @media only screen and (min-width: 900px){
    display: none;
  }
`;

const TopLink = styled(motion.img)`
  display: block;
  position: fixed;
  width: 40px;
  bottom: 50px;
  right: 50px;
`;

export default Header
