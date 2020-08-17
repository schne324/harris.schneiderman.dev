import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import dequeLogo from '../img/deque.png';
import w3cLogo from '../img/w3c.png';
import a11ysdLogo from '../img/a11ysd.png';
import './About.css';

const App: React.ComponentType = () => {
  return (
    <div className="About">
      <h1>About</h1>
      <div className="Cards">
        <Card
          title="Principal UI Engineer @deque"
          homepage="https://deque.com"
          description={<img src={dequeLogo} role="presentation" />}
        />
        <Card
          title="Member of ARIA Working Group"
          homepage="https://w3.org"
          description={<img src={w3cLogo} role="presentation" />}
        />
        <Card
          title="Organizer of a11ySD - San Diego Accessibility &amp; Inclusive Design"
          homepage="https://a11ysd.com"
          description={<img src={a11ysdLogo} role="presentation" />}
        />
        <Card
          title="Writer of code (@schne324)"
          homepage="https://github.com/schne324"
          description={<GitHubIcon />}
        />
        <Card
          title={<Link to="/projects">Speaker and writer</Link>}
          description={<RecordVoiceOverIcon />}
        />
      </div>
    </div>
  );
};

export default App;
