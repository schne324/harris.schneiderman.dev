import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="Logo" aria-label="Home">
              {'<H />'}
            </Link>
          </li>
          <li className="Right">
            <Link to="/about" aria-label="About">
              <PermIdentityIcon />
            </Link>
          </li>
          <li>
            <Link to="/projects" aria-label="Projects">
              <BuildIcon />
            </Link>
          </li>
          <li>
            <Link to="/publications" aria-label="Publications">
              <RecordVoiceOverIcon />
            </Link>
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
