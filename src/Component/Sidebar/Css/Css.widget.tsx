import styled from '@emotion/styled';
import React from 'react';

const Aside = styled('aside')({
  display: 'flex',
  flex: '0 0 250px',
  margin: '20px',
  flexDirection: 'column',
});

export const Css: React.FC<any> = ({ FakeSidebar, onNavigation }) => {
  return (
    <Aside>
      {FakeSidebar.map((link, key) => {
        return (
          <div key={key}>
            <a href="" onClick={onNavigation}>
              {link.label}
            </a>
            {link.subLinks.map((sublink, innerkey) => {
              return (
                <div key={innerkey}>
                  <a href="" onClick={onNavigation}>
                    {sublink.label}
                  </a>
                </div>
              );
            })}
            <div></div>
          </div>
        );
      })}
    </Aside>
  );
};
