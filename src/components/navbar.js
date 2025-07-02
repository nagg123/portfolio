import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { personalData } from './data/portfoliodata';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? 'var(--surface-color)' : 'transparent')};
  height: 80px;
  margin-top: -80px; /* Compensate for body margin if any, or to overlap hero */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.3s all ease;
  box-shadow: ${({ scrollNav }) => (scrollNav ? '0 2px 10px rgba(0,0,0,0.1)' : 'none')};

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(ScrollLink)`
  color: var(--primary-color);
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-family: var(--font-headings);
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--text-color);
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '80px' : '-100vh')};
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    transition: all 0.5s ease;
    background: var(--surface-color);
  }
`;

const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;

const NavLinks = styled(ScrollLink)`
  color: var(--text-color);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;

  &.active {
    border-bottom: 3px solid var(--secondary-color);
    color: var(--primary-color);
  }

  &:hover {
    color: var(--secondary-color);
    transition: 0.2s ease-in-out;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav);
  }, []);
  
  const navItems = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="hero" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
          {personalData.name.split(' ')[0]} {/* First name as logo */}
        </NavLogo>
        <MobileIcon onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu isOpen={isOpen} onClick={toggle}> {/* Close menu on item click */}
          {navItems.map(item => (
            <NavItem key={item}>
              <NavLinks
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80} // Adjust offset if navbar height changes
                activeClass="active"
              >
                {item}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;