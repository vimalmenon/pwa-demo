import styled from '@emotion/styled';
import React from 'react';

const Header = styled('header')({
  display: 'flex',
  flex: '1',
  padding: '15px 10px',
});

const Navigation = styled('nav')({
  display: 'flex',
});

const Item = styled('div')({
  display: 'flex',
  padding: '10px',
});

export const Css: React.FC<any> = ({ FakeLinks, onNavigation }) => {
  return (
    <Header>
      <Navigation>
        {FakeLinks.map((link, key) => {
          return (
            <Item key={key}>
              <a href="" onClick={onNavigation}>
                {link.label}
              </a>
            </Item>
          );
        })}
      </Navigation>
    </Header>
  );
};
