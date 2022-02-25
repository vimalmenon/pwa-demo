import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocation } from 'react-router';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { Navigate } from '../Navigate';

import { PageLinks } from '../../Data';

export const Layout: React.FC = ({ children }) => {
  const location = useLocation();
  const { title, id } = PageLinks[location.pathname] || {};
  switch (id) {
    case 1:
      return (
        <Navigate>
          <CssBaseline />
          <section>
            <Header />
            <Sidebar />
            <section>
              <div>
                <h1>{title}</h1>
              </div>
              <div>{children}</div>
            </section>
            <Footer />
          </section>
        </Navigate>
      );
    case 2:
      return (
        <Navigate>
          <CssBaseline />
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
        </Navigate>
      );
    case 3:
      return (
        <Navigate>
          <CssBaseline />
          <section>
            <Header />
            <Sidebar />
            <section>
              <div>
                <h1>{title}</h1>
              </div>
              <div>{children}</div>
            </section>
            <Footer />
          </section>
        </Navigate>
      );
    default:
      return (
        <Navigate>
          <CssBaseline />
          <div>{children}</div>
        </Navigate>
      );
  }
};
