import React from 'react';

export const NoCss: React.FC<any> = ({ FakeLinks, onNavigation }) => {
  return (
    <header>
      <nav>
        {FakeLinks.map((link, key) => {
          return (
            <a href="" onClick={onNavigation} key={key}>
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
};
