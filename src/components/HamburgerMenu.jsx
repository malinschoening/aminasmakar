import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import mobileLogo from './img/mobile-menu-logo.png'
import Navigation from './Navigation'

const HamburgerMenu = ( {} ) => {

  const [hamburger, setHamburger] = useState(false)

  return (
    <>
        <MobileLogo src={mobileLogo}
            onClick={() => setHamburger(!hamburger)}
            animate={{
                rotate: hamburger ? 90 : 0
        }}/>
        <Navigation hamburger={hamburger} headerView={false} />
    </>
  )
}


const MobileLogo = styled(motion.img)`
  width: 40px;
  padding: 8px;
`;

export default HamburgerMenu
