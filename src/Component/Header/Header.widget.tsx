import React from 'react';
import { useLocation } from 'react-router';
import { FakeLinks, PageLinks } from '../../Data';

export const Header: React.FC = () => {
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
    case 2:
      return (
        <table cellSpacing={'15px'}>
          <tbody>
            <tr>
              {FakeLinks.map((link, key) => {
                return (
                  <td key={key} style={{ borderSpacing: '10px' }}>
                    <a href="" onClick={onNavigation}>
                      {link.label}
                    </a>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      );
    default:
      return null;
  }
};
