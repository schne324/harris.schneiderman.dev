import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Card.css';

interface Props {
  title: string | React.ReactNode;
  homepage?: string;
  description: React.ReactNode;
}

const Card: React.ComponentType<Props> = ({ title, description, homepage }) => (
  <div className="Card">
    <h2>
      {homepage ? (
        <a href={homepage} target="_blank">
          {title}
        </a>
      ) : (
        title
      )}
    </h2>
    {description}
  </div>
);

export default Card;
