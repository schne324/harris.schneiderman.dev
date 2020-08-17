import React, { Fragment, useState, useEffect } from 'react';
import Card from './Card';
import { Dots } from 'hang-tight-react';
import { Repo } from './App';

interface Props {
  error: boolean;
  repos: Repo[];
  getRepos: () => void;
}

const Projects: React.ComponentType<Props> = ({ error, repos, getRepos }) => {
  const loading = !repos.length;

  useEffect(() => {
    if (repos.length) {
      return;
    }

    getRepos();
  }, []);

  return (
    <div className="Projects">
      <h1>Projects</h1>
      {error && (
        <p>
          Failed to fetch projects from{' '}
          <a href="https://api.github.com/">https://api.github.com/</a>
        </p>
      )}
      {!error && loading && <Dots />}
      {!!repos.length && (
        <>
          <div className="Cards">
            {repos.map(
              ({
                title,
                homepage,
                stars,
                languages,
                repo,
                description,
                url,
              }) => {
                const langs = Object.keys(languages);
                return (
                  <Card
                    key={repo}
                    title={title}
                    homepage={homepage}
                    description={
                      <Fragment>
                        <p>{description}</p>
                        <p>stars: {stars}</p>
                        {!!langs.length && (
                          <ul aria-label={`${title} languages`}>
                            {langs.map((lang) => (
                              <li key={lang}>{lang}</li>
                            ))}
                          </ul>
                        )}
                        <a className="Card__source" href={url} target="_blank">
                          <span aria-hidden="true">{'<'}</span>
                          view source
                          <span>{' />'}</span>
                        </a>
                      </Fragment>
                    }
                  />
                );
              }
            )}
          </div>
          <p>
            <em>
              This data was fetched from{' '}
              <a href="https://api.github.com/">https://api.github.com/</a>
            </em>
          </p>
        </>
      )}
    </div>
  );
};

export default Projects;
