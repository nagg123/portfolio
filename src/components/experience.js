import React from 'react';
import styled from 'styled-components';
import { educationData, experienceData } from './data/portfoliodata';

const ExperienceSection = styled.section`
  background-color: var(--background-color);
  padding: 60px 20px;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 960px;
  margin: auto;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: var(--secondary-color);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 20px;
      transform: none;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 20px 30px;
  position: relative;
  background-color: inherit;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: var(--surface-color);
    border: 4px solid var(--primary-color);
    top: 24px;
    border-radius: 50%;
    z-index: 1;
  }

  &:nth-child(odd) {
    left: 0;
    text-align: right;
    padding-right: calc(50% + 40px);
    &::after {
      right: -8px;
    }
  }

  &:nth-child(even) {
    left: 30%;
    text-align: left;
    padding-left: calc(50% + 40px);
    &::after {
      left: -8px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0 !important;
    text-align: left !important;
    padding: 20px 20px 20px 60px;

    &::after {
      left: 18px;
    }
  }
`;

const TimelineContent = styled.div`
  background-color: var(--surface-color);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  position: relative;

  h3 {
    margin: 0 0 8px;
    font-size: 1.2rem;
    color: var(--primary-color);
  }

  h4 {
    margin: 0 0 4px;
    font-size: 0.95rem;
    color: var(--text-secondary-color);
  }

  p {
    font-size: 0.9rem;
    margin: 5px 0;
    color: var(--text-secondary-color);
  }

  ul {
    margin: 10px 0 0;
    padding-left: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary-color);

    li {
      margin-bottom: 6px;
    }
  }
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience" className="container">
      <h2 className="section-title">Education & Experience</h2>
      <Timeline>
        {educationData.map((edu, index) => (
          <TimelineItem key={`edu-${index}`}>
            <TimelineContent>
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.period}</p>
              <p><strong>{edu.grade}</strong></p>
            </TimelineContent>
          </TimelineItem>
        ))}

        {experienceData.map((exp, index) => (
          <TimelineItem key={`exp-${index}`}>
            <TimelineContent>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.period}</p>
              {exp.responsibilities && (
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}

        {experienceData.length === 0 && educationData.length > 0 && (
          <TimelineItem>
            <TimelineContent style={{ textAlign: 'center' }}>
              <p>Seeking exciting opportunities to apply my skills!</p>
            </TimelineContent>
          </TimelineItem>
        )}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
