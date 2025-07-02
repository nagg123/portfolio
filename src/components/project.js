import React from 'react';
import styled from 'styled-components';
import { projectsData } from './data/portfoliodata';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  background-color: var(--background-color); // Or keep it default
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: var(--surface-color);
  border-radius: 12px;
  box-shadow: var(--shadow);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--hover-shadow);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover; // Or 'contain' if image aspect ratio is important
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1; /* Allows content to fill space, pushing links to bottom */
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary-color);
  margin-bottom: 1rem;
  flex-grow: 1; /* Pushes tech tags and links down */
`;

const ProjectTags = styled.div`
  margin-bottom: 1rem;
  span {
    background-color: var(--secondary-color);
    color: var(--text-on-secondary);
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-block;
  }
`;

const ProjectLinks = styled.div`
  margin-top: auto; /* Pushes links to the bottom of the card content */
  display: flex;
  gap: 1rem;
  a {
    color: var(--primary-color);
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 500;
    &:hover {
      color: var(--secondary-color);
      svg {
        transform: scale(1.1);
      }
    }
    svg {
      margin-right: 0.3rem;
      transition: transform 0.2s ease;
    }
  }
`;

const DetailsList = styled.ul`
  list-style-type: disc;
  margin-left: 1.2rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--text-secondary-color);
  li { margin-bottom: 0.3rem; }
`;


const Projects = () => {
  if (!projectsData || projectsData.length === 0) {
    return (
      <ProjectsSection id="projects" className="container">
        <h2 className="section-title">My Projects</h2>
        <p style={{ textAlign: 'center' }}>More projects coming soon!</p>
      </ProjectsSection>
    );
  }
  return (
    <ProjectsSection id="projects" className="container">
      <h2 className="section-title">My Projects</h2>
      <ProjectsGrid>
        {projectsData.map((project) => (
          <ProjectCard key={project.id}>
            {project.imageUrl && <ProjectImage src={project.imageUrl} alt={project.title} />}
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              {project.problemStatement && (
                <>
                  <h4>Goal:</h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--text-secondary-color)', marginBottom: '0.75rem'}}>{project.problemStatement}</p>
                </>
              )}
              {project.myRole && (
                 <>
                  <h4>My Role:</h4>
                  <p style={{fontSize: '0.9rem', color: 'var(--text-secondary-color)', marginBottom: '0.75rem'}}>{project.myRole}</p>
                </>
              )}

              {project.challenges && project.challenges.length > 0 && (
                <>
                  <h4>Challenges:</h4>
                  <DetailsList>
                    {project.challenges.map((challenge, index) => <li key={index}>{challenge}</li>)}
                  </DetailsList>
                </>
              )}
              {project.learnings && project.learnings.length > 0 && (
                <>
                  <h4>Learnings:</h4>
                  <DetailsList>
                    {project.learnings.map((learning, index) => <li key={index}>{learning}</li>)}
                  </DetailsList>
                </>
              )}

              <ProjectTags>
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </ProjectTags>
              <ProjectLinks>
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> View Code
                  </a>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;