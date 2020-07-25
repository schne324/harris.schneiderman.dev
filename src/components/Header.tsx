import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import BuildIcon from '@material-ui/icons/Build';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import './Header.css';

const Header: React.ComponentType = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/" className="Logo" aria-label="Home">
              {'<H />'}
            </a>
          </li>
          <li className="Right">
            <a href="/About" aria-label="About">
              <PermIdentityIcon />
            </a>
          </li>
          <li>
            <a href="/About" aria-label="Projects">
              <BuildIcon />
            </a>
          </li>
          <li>
            <a href="/About" aria-label="Publications">
              <RecordVoiceOverIcon />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/schne324"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
