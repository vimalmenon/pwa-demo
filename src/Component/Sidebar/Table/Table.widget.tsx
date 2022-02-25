import React from 'react';

export const Table: React.FC<any> = ({ FakeSidebar, onNavigation }) => {
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
};
