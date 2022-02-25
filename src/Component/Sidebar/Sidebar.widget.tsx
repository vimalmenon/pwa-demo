import React from 'react';
import { useLocation } from 'react-router';

import { FakeSidebar } from '../../Data';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const onNavigation = (event) => {
    event.preventDefault();
    console.log(location);
  };
  if (location.pathname === '/') {
    return null;
  }
  return (
    <aside>
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
    </aside>
  );
};
