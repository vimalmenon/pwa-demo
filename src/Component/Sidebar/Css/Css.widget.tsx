import React from 'react';

export const Css: React.FC<any> = ({ FakeSidebar, onNavigation }) => {
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
