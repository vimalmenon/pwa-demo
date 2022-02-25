import React from 'react';

import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { Sidebar } from '../../Sidebar';

export const Table: React.FC<any> = ({ title, children, show }) => {
  if (show) {
    return (
      <table style={{ border: '1pd solid black' }}>
        <tbody>
          <tr>
            <td colSpan={2}>
              <Header />
            </td>
          </tr>
          <tr>
            <td style={{ verticalAlign: 'top' }}>
              <Sidebar />
            </td>
            <td>
              <section>
                <div>
                  <h1>{title}</h1>
                </div>
                <div>{children}</div>
              </section>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <Footer />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  return null;
};
