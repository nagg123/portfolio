import React from 'react';
import styled from 'styled-components';
import { personalData } from './data/portfoliodata';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const ContactSection = styled.section`
  background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
  color: var(--text-on-primary);
  padding: 4rem 0;
`;

const ContactContainer = styled.div`
  text-align: center;
  max-width: 700px;
  h2 {
    color: var(--text-on-primary);
    &::after { background-color: var(--text-on-primary); } /* Make line visible on dark bg */
  }
`;

const ContactIntro = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  color: rgba(255,255,255,0.9);
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactLinkItem = styled.a`
  color: var(--text-on-primary);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border: 2px solid var(--text-on-primary);
  border-radius: 30px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--text-on-primary);
    color: var(--primary-color);
  }

  svg {
    margin-right: 0.75rem;
    font-size: 1.5rem;
  }
`;

// Optional: Simple Contact Form (would require backend or service like Formspree/Netlify Forms)
// const ContactForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   max-width: 500px;
//   margin: 2rem auto 0;
//   input, textarea {
//     padding: 0.8rem;
//     border-radius: 5px;
//     border: 1px solid var(--border-color);
//     font-family: inherit;
//     font-size: 1rem;
//   }
//   textarea {
//     min-height: 120px;
//     resize: vertical;
//   }
//   button {
//     align-self: center; /* Center button if form is wider */
//     background: var(--text-on-primary);
//     color: var(--primary-color);
//     &:hover {
//       background: rgba(255,255,255,0.85);
//     }
//   }
// `;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactContainer className="container">
        <h2 className="section-title">Get In Touch</h2>
        <ContactIntro>
          I'm currently looking for new opportunities and would love to hear from you.
          Whether you have a question or just want to say hi, feel free to reach out!
        </ContactIntro>
        <ContactLinks>
          <ContactLinkItem href={`mailto:${personalData.email}`}>
            <FaEnvelope /> {personalData.email}
          </ContactLinkItem>
          {personalData.phone && (
             <ContactLinkItem href={`tel:${personalData.phone}`}>
                <FaPhone /> {personalData.phone}
            </ContactLinkItem>
          )}
          <ContactLinkItem href={personalData.linkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </ContactLinkItem>
          <ContactLinkItem href={personalData.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </ContactLinkItem>
        </ContactLinks>
        {/* 
        <ContactForm name="contact" method="POST" data-netlify="true"> // Example for Netlify forms
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit" className="button">Send Message</button>
        </ContactForm> 
        */}
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;