import styled from '@emotion/styled';
import React from 'react';

const Header = styled('header')({
  display: 'flex',
  flex: '1',
  background: 'red',
});

export const Css: React.FC<any> = ({ FakeLinks, onNavigation }) => {
  return (
    <Header>
      <nav>
        {FakeLinks.map((link, key) => {
          return (
            <a href="" onClick={onNavigation} key={key}>
              {link.label}
            </a>
          );
        })}
      </nav>
    </Header>
  );
};
