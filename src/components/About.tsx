import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const App: React.ComponentType = () => {
  return (
    <div className="About">
      <h1>About</h1>
      <ul className="Box">
        <li>
          <span>Principal UI Engineer</span>{' '}
          <a href="https://deque.com">@deque</a>
        </li>
        <li>
          <span>Member of ARIA Working Group</span>{' '}
          <a href="https://w3.org">@w3c</a>
        </li>
        <li>
          <span>Writer of code:</span>{' '}
          <a href="https://github.com/schne324">@schne324 (github)</a>
        </li>
        <li>
          <span>Organizer of</span>{' '}
          <a href="https://a11ysd.com">
            a11ySD - San Diego Accessibility &amp; Inclusive Design
          </a>
        </li>
        <li>
          <Link to="/publications">Writer of articles</Link>
        </li>
        <li>
          <Link to="/publications#speaker">Speaker of words</Link>
        </li>
      </ul>
    </div>
  );
};

export default App;
