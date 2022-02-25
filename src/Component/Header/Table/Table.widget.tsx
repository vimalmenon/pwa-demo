import React from 'react';

export const Table: React.FC<any> = ({ FakeLinks, onNavigation }) => {
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
};
