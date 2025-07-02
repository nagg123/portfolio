import React from 'react';
import styled from 'styled-components';
// Make sure skillsData is included in this import statement:
import {skillsData,aboutData } from './data/portfoliodata';

const AboutSection = styled.section`
  background-color: var(--surface-color);
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  align-items: start;
`;

const BioText = styled.div`
  p {
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
    font-size: 1.05rem;
  }
`;

const InfoList = styled.div`
  h4 {
    margin-bottom: 0.8rem;
    color: var(--primary-color);
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    margin-bottom: 0.5rem;
    color: var(--text-secondary-color);
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <AboutSection id="about" className="container">
      <h2 className="section-title">About Me</h2>
      <AboutContainer>
        <BioText>
          {aboutData.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </BioText>
        <InfoList>
          <h4>Key Strengths</h4>
          <ul>
            {/* Line 53 (or around here) uses skillsData */}
            {skillsData.soft.slice(0, 3).map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
            <li>Web Development Fundamentals (HTML, CSS, JS,REACT)</li>
          </ul>
          {aboutData.interests && aboutData.interests.length > 0 && (
            <>
              <h4>Interests</h4>
              <ul>
                {aboutData.interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </>
            
          )}
        </InfoList>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;