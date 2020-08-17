import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import pLimit from 'p-limit';
import Home from './Home';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Publications from './Publications';
import repoData from '../repos';
import './App.css';

// TODO: Focus main (or h1) on route transition

interface Language {
  [key: string]: number;
}

export interface Repo {
  title: string;
  homepage: string;
  stars: number;
  url: string;
  languages: Language;
  repo: string;
  description: string;
}

const limit = pLimit(3);

const App: React.ComponentType = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<boolean>(false);
  const getRepos = () => {
    const fetchCalls = repoData.map(({ repo, description }) => {
      return limit(() => {
        return new Promise(async (resolve, reject) => {
          try {
            const githubResponse = await fetch(
              `https://api.github.com/repos/${repo}`
            );
            const githubData = await githubResponse.json();
            const languagesResponse = await fetch(
              `https://api.github.com/repos/${repo}/languages`
            );
            const languages = await languagesResponse.json();
            resolve({
              title: githubData.name,
              homepage: githubData.homepage,
              stars: githubData.stargazers_count,
              url: githubData.html_url,
              languages,
              repo,
              description,
            });
          } catch (err) {
            reject(err);
          }
        });
      });
    });

    Promise.all(fetchCalls)
      .then((data: any) => {
        setRepos(data);
      })
      .catch(() => setError(true));
  };

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects error={error} repos={repos} getRepos={getRepos} />
          </Route>
          <Route path="/publications">
            <Publications />
          </Route>
          <Route>
            <h1>For oh for. Page not found...</h1>
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
