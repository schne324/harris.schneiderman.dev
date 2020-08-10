import React, { useState, useEffect } from 'react';
import pLimit from 'p-limit';
import Card from './Card';
import { Dots } from 'hang-tight-react';

const limit = pLimit(3);
const repoData = [
  {
    repo: 'schne324/dragon-drop',
    description: 'Fully accessible drag-and-drop list reordering module',
  },
  {
    repo: 'dequelabs/cauldron',
    description: 'Deque accessible pattern library',
  },
  {
    repo: 'schne324/hang-tight',
    description: 'CSS Loaders',
  },
  {
    repo: 'dequelabs/combobo',
    description: 'Accessible combobox module',
  },
  {
    repo: 'schne324/concert-vault',
    description: 'Concert tracker. A list of concerts I have attended',
  },
  {
    repo: 'schne324/recipes.harris-schneiderman.com',
    description: 'My recipes',
  },
  {
    repo: 'schne324/live-region',
    description: 'ARIA Live Region module',
  },
  {
    repo: 'schne324/react-offscreen',
    description: 'React component for rendering offscreen text',
  },
  {
    repo: 'schne324/games',
    description: 'Accessible web games',
  },
  {
    repo: 'schne324/live-region-playground',
    description: 'Simple ARIA live region sandbox/playground',
  },
  {
    repo: 'schne324/tideinfo.org',
    description:
      '(WORK IN PROGRESS) Tide info app using the NOAA tide data API',
  },
];

interface Language {
  [key: string]: number;
}

interface Repo {
  title: string;
  homepage: string;
  stars: number;
  url: string;
  languages: Language;
  repo: string;
  description: string;
}

const Projects: React.ComponentType = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalls = repoData.map(({ repo, description }) => {
      return limit(() => {
        return new Promise(async (resolve) => {
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
        });
      });
    });

    Promise.all(fetchCalls).then((data: any) => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="Projects">
      <h1>Projects</h1>
      {loading ? (
        <Dots />
      ) : (
        <div className="Cards">
          {repos.map(
            ({ title, homepage, stars, languages, repo, description, url }) => (
              <Card
                key={repo}
                title={title}
                homepage={homepage}
                description={description}
                stars={stars}
                languages={languages}
                url={url}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
