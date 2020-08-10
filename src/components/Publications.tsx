import React from 'react';
import './Publications.css';

const App: React.ComponentType = () => {
  return (
    <div className="Publications">
      <h1>Publications</h1>
      <div className="Box">
        <h2>
          Expand Your Test Coverage: Manual &amp; Automated Accessibility
          Testing Unite
        </h2>
        <h3>Smashing TV</h3>
        <iframe
          width="560"
          height="315"
          src="https://player.vimeo.com/video/429594657"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="Box">
        <h2>
          Using Automation to Test UI Components for Accessibility During
          Development
        </h2>
        <h3>CSUN 2020</h3>
        <p>
          Live coding at (virtual) CSUN 2020! Using TDD, we built a reusable,
          accessible menu button component based on the ARIA Authoring
          Practices.
        </p>
        <div className="Box__link">
          <a href="https://github.com/dequelabs/csun20-aria-menu-button">
            View menu button repo
          </a>
        </div>
      </div>
      <div className="Box">
        <h2>Translating Design Wireframes into Accessible HTML/CSS</h2>
        <h3>Smashing TV</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5gFSru8yGaU"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="Box__link">
          <a href="https://www.smashingmagazine.com/2020/07/design-wireframes-accessible-html-css/">
            View follow-up smashing magazine article
          </a>
        </div>
      </div>
      <div className="Box">
        <h2>Enter The Dragon (Drop): Accessible List Reordering</h2>
        <h3>Smashing Magazine</h3>
        <p>
          This article takes an in-depth look at{' '}
          <a href="https://github.com/schne324/dragon-drop">Dragon Drop</a>, the
          accessible drag-and-drop list reordering plugin.
        </p>
        <div className="Box__link">
          <a href="https://www.smashingmagazine.com/2018/01/dragon-drop-accessible-list-reordering/">
            View "Enter the Dragon (Drop)" article
          </a>
        </div>
      </div>
      <div className="Box">
        <h2>Live coding ARIA Tabs</h2>
        <h3>CSUN 2019</h3>
        <p>Live coding an accessible tabs component</p>
        <div className="Box__link">
          <a href="https://github.com/dequelabs/csun19-tdd-component">
            View ARIA Tabs repo
          </a>
        </div>
      </div>
      <div className="Box">
        <h2>Nightmare on HTML Street</h2>
        <h3>CSUN 2018</h3>
        <p>
          A presentation describing the collaboration between a designer and a
          developer in building the feature-rich accessible autocomplete
          combobox widget,{' '}
          <a href="https://github.com/dequelabs/combobo">Combobo</a>.
        </p>
        <div className="Box__link">
          <a href="https://schne324.github.io/csun-combobo-talk-slides/#/1">
            View "Nightmare on HTML Street" slides
          </a>
        </div>
      </div>
      <div className="Box">
        <h2>Designers and Developers Working Together - Mass Hysteria!</h2>
        <h3>CodeMash 2018</h3>
        <p>
          A presentation on the ins-and-outs of designers and developers working
          on web applications.
        </p>
        <div className="Box__link">
          <a href="https://schne324.github.io/combobo-talk-slides/">
            View "Mass Hysteria!" slides
          </a>
        </div>
      </div>
      <div className="Box">
        <h2>Advanced ARIA</h2>
        <h3>CSUN 2017</h3>
        <p>A deep dive presentation on ARIA</p>
        <div className="Box__link">
          <a href="https://schne324.github.io/csun-advanced-aria/">
            View "Advanced ARIA" slides
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
