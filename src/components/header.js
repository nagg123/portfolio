import React from 'react';
import { profileData } from './data/profiledata';
import { FiDownload } from 'react-icons/fi'; // Icon for resume

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-content">
        <div>
          <h1>{profileData.name}</h1>
          <p className="tagline">{profileData.title}</p>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a> {/* Changed "Projects" to "Experience" for a common term */}
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a 
            href={process.env.PUBLIC_URL + profileData.resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="button button-outline"
          >
            <FiDownload style={{ marginRight: '8px' }} /> Resume
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;