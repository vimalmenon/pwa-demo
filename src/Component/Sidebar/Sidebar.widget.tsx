import React from 'react';
import { useLocation } from 'react-router';

import { FakeSidebar, PageLinks } from '../../Data';

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const onNavigation = (event) => {
    event.preventDefault();
  };
  if (location.pathname === '/') {
    return null;
  }
  const { id } = PageLinks[location.pathname] || {};
  switch (id) {
    case 1:
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
    case 2:
      return (
        <table width={'150px'} style={{ margin: '10px 0' }}>
          <tbody>
            {FakeSidebar.map((link, key) => {
              return (
                <tr key={key}>
                  <td>
                    <a href="" onClick={onNavigation}>
                      {link.label}
                    </a>
                    {link.subLinks.map((sublink, innerkey) => {
                      return (
                        <table key={innerkey} style={{ marginLeft: '20px' }}>
                          <tbody>
                            <tr>
                              <td>
                                <a href="" onClick={onNavigation}>
                                  {sublink.label}
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    default:
      return null;
  }
};
