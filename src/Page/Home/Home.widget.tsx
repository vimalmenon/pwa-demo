import React from 'react';

import { Link } from 'react-router-dom';

import { Pages } from '../../Data';

export const Home: React.FC = () => {
  return (
    <section>
      <div>
        {Pages.map((link, key) => {
          return (
            <Link to={link.link} key={key}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </section>
  );
};
