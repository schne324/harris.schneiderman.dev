import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Card.css';

interface Languages {
  [key: string]: number;
}

interface Props {
  title: string;
  description: string;
  stars: number;
  homepage: string;
  languages: Languages;
  url: string;
}

const Card: React.ComponentType<Props> = ({
  title,
  description,
  stars,
  homepage,
  languages,
  url,
}) => {
  const langs = Object.keys(languages);
  return (
    <div className="Card">
      <h2>
        <a href={homepage} target="_blank">
          {title}
        </a>
      </h2>
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
    </div>
  );
};

export default Card;
