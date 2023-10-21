import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import logo from './img/logo-light.png'
import mobileLogo from './img/mobile-menu-logo.png'
import Navigation from './Navigation'

const HamburgerMenu = ( {} ) => {

  const [hamburger, setHamburger] = useState(false)

  return (
    <>
    <Container>
        <MobileLogo src={mobileLogo}
            onClick={() => setHamburger(!hamburger)}
            animate={{
                rotate: hamburger ? 90 : 0
        }}/>
        <Logo src={logo} alt="Logo" />
        <Left></Left>
    </Container>
    <Navigation hamburger={hamburger} headerView={false} />
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 40px;
`;

const MobileLogo = styled(motion.img)`
  width: 40px;
  padding: 8px;
`;

const Logo = styled.img`
  height: 40px;
`;

export default HamburgerMenu
