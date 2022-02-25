import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocation } from 'react-router';

import { Navigate } from '../Navigate';

import { PageLinks } from '../../Data';

import { Home } from './Home';
import { NoCss } from './NoCss';
import { Table } from './Table';
import { Css } from './Css';

export const Layout: React.FC = ({ children }) => {
  const location = useLocation();
  const { title, id } = PageLinks[location.pathname] || {};

  return (
    <Navigate>
      <CssBaseline />
      <Home show={id === 0}>{children}</Home>
      <NoCss title={title} show={id === 1}>
        {children}
      </NoCss>
      <Table title={title} show={id === 2}>
        {children}
      </Table>
      <Css title={title} show={id === 3}>
        {children}
      </Css>
    </Navigate>
  );
};
