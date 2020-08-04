import React from 'react';
import './Home.css';

const App: React.ComponentType = () => {
  return (
    <div className="Home">
      <div>
        <h1>{'<Harris />'}</h1>
        <p>Web Developer and stuff.</p>
      </div>
      <a href="https://github.com/schne324/harris.schneiderman.dev">
        view the source code for this site
      </a>
    </div>
  );
};

export default App;
