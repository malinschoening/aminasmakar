import React from 'react'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'

const Navigation = ( { hamburger, headerView, scroll } ) => {
  return (
    <>
    {
    headerView 
    ? <DesktopNav className={scroll ? 'top' : 'scroll'}>
        <ul>
            <DesktopLi><NavLinks activeClass='active' to="contact" spy={true} smooth={true} offset={0} duration={500}>
              Kontakt
            </NavLinks></DesktopLi>
            <DesktopLi><NavLinks activeClass='active' to="catering" spy={true} smooth={true} offset={0} duration={500}>
              Catering
            </NavLinks></DesktopLi>
            <DesktopLi><NavLinks activeClass='active' to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
              Tidigare uppdrag
            </NavLinks></DesktopLi>
            <DesktopLi><NavLinks activeClass='active' to="about" spy={true} smooth={true} offset={0} duration={500}>
              Om mig
            </NavLinks></DesktopLi>
        </ul>
      </DesktopNav>
    : <MobileNav className={hamburger ? 'open' : 'closed'}>
        <li><NavLinks activeClass='active' to="contact" spy={true} smooth={true} offset={0} duration={500}>
          Kontakt
        </NavLinks></li>
        <li><NavLinks activeClass='active' to="catering" spy={true} smooth={true} offset={0} duration={500}>
          Catering
        </NavLinks></li>
        <li><NavLinks activeClass='active' to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
          Tidigare uppdrag
        </NavLinks></li>
        <li><NavLinks activeClass='active' to="about" spy={true} smooth={true} offset={0} duration={500}>
          Om mig
        </NavLinks></li>
      </MobileNav>
    }
    </>
  )
}

const NavLinks = styled(ScrollLink)`
  color: white;
  font-family: 'roboto';

  &.active {
    color: black;
  }

  &:hover {
    color: black;
  }
`;

const DesktopNav = styled.nav`
  display: none;

  @media only screen and (min-width: 900px){
    display: block;
    font-size: 1.4rem;
    width: 100%;
    text-align: right;
    margin-right: 30px;

    &.scroll {
      font-size: 1.4rem;
    }
  }
`;

const DesktopLi = styled.li`
      display: inline;
      list-style: none;
      padding-right: 3%;
`;

const MobileNav = styled.nav`
  padding-top: 15px;
  padding-left: 20px;
  list-style-type: none;
  color: white;
  font-size: calc(15px + 0.890625vw);

  &.closed {
    display: none;
  }
  
  &.open {
    display: inline;
    position: absolute;
    left: 0;
    background-color: grey;
    padding-right: 40px;
    opacity: 0.9;
    border-bottom-right-radius: 10px;
    padding-bottom: 20px;
    margin-top: -5px;
  }
`;

export default Navigation
