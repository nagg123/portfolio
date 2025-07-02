import styled, { keyframes } from 'styled-components';
import { personalData} from './data/portfoliodata';

import { Link as ScrollLink } from 'react-scroll';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: var(--text-on-primary);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden; /* For any decorative elements */
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  animation: ${fadeIn} 1s ease-out;
`;



const HeroName = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-on-primary);
  font-family: var(--font-headings);
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroTagline = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.95);
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  .hero-button {
    background: var(--text-on-primary);
    color: var(--primary-color);
    font-weight: 600;
    padding: 0.9rem 2rem;
  }
  .hero-button:hover {
    background: rgba(255,255,255,0.85);
    color: var(--primary-color);
  }
  .hero-button-outline {
    background: transparent;
    color: var(--text-on-primary);
    border: 2px solid var(--text-on-primary);
    padding: calc(0.9rem - 2px) calc(2rem - 2px); /* Adjust padding for border */
  }
  .hero-button-outline:hover {
    background: var(--text-on-primary);
    color: var(--primary-color);
  }
`;


const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContainer>
     
        <HeroName>{personalData.name}</HeroName>
        <HeroTitle>{personalData.title}</HeroTitle>
        <HeroTagline>{personalData.tagline}</HeroTagline>
        <CTAContainer>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            className="button hero-button"
          >
            View My Projects
          </ScrollLink>
          <a href={personalData.resumeLink} target="_blank" rel="noopener noreferrer" className="button hero-button-outline">
           <a href="/resume.pdf" download className="btn btn-primary">
  Download Resume
</a>
          </a>
        </CTAContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;