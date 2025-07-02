import React from 'react';
import styled from 'styled-components';
import { skillsData } from './data/portfoliodata';

const SkillsSection = styled.section`
  background-color: var(--surface-color);
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const SkillCategory = styled.div`
  h3 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    text-align: left;
    position: relative;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--secondary-color);
    display: inline-block; /* So border only spans text width */
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem = styled.li`
  background: var(--background-color);
  color: var(--text-color);
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  svg{
    color: var(--primary-color);
    font-size: 1.3em;
  }
`;

const SimpleList = styled.ul`
  list-style: none;
  padding: 0;
  li {
    background: var(--background-color);
    color: var(--text-color);
    padding: 0.6rem 1rem;
    border-radius: 8px;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }
`;

const Skills = () => {
  return (
    <SkillsSection id="skills" className="container">
      <h2 className="section-title">My Skills</h2>
      <SkillsContainer>
        {skillsData.Frontend && skillsData.Frontend.length > 0 && (
          <SkillCategory>
            <h3>Frontend</h3>
            <SkillsList>
              {skillsData.Frontend.map((skill, index) => (
                <SkillItem key={index}>
                  {skill.icon} {skill.name} 
                  {/* <small>({skill.proficiency})</small> */}
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        )}

         {skillsData.Backend && skillsData.Backend.length > 0 && (
          <SkillCategory>
            <h3>Backend</h3>
            <SimpleList>
              {skillsData.Backend.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </SimpleList>
          </SkillCategory>
        )}

        {skillsData.soft && skillsData.soft.length > 0 && (
          <SkillCategory>
            <h3>Soft Skills</h3>
            <SimpleList>
              {skillsData.soft.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </SimpleList>
          </SkillCategory>
        )}

        {skillsData.languages && skillsData.languages.length > 0 && (
          <SkillCategory>
            <h3>Languages</h3>
            <SimpleList>
              {skillsData.languages.map((lang, index) => (
                <li key={index}>{lang.name} ({lang.proficiency})</li>
              ))}
            </SimpleList>
          </SkillCategory>
        )}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;