import React from 'react';
import styled from 'styled-components';
import { personalData } from './data/portfoliodata';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #222; /* Dark background for footer */
  color: #ccc;
  text-align: center;
  padding: 2rem 1rem;
`;

const SocialLinks = styled.div`
  margin-bottom: 1rem;
  a {
    color: #ccc;
    margin: 0 0.75rem;
    font-size: 1.8rem;
    transition: color 0.3s ease;
    &:hover {
      color: var(--secondary-color);
    }
  }
`;

const CopyrightText = styled.p`
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href={personalData.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href={`mailto:${personalData.email}`} aria-label="Email">
          <FaEnvelope />
        </a>
      </SocialLinks>
      <CopyrightText>
        © {new Date().getFullYear()} {personalData.name}. All rights reserved.
      </CopyrightText>
      {/* Optional: Link to your portfolio source code if public */}
      {/* <CopyrightText>
        <a href="https://github.com/your-repo/portfolio-source" target="_blank" rel="noopener noreferrer" style={{color: '#aaa', fontSize: '0.8rem'}}>
          View Portfolio Source
        </a>
      </CopyrightText> */}
    </FooterContainer>
  );
};

export default Footer;