import React from 'react';
import { useLocation } from 'react-router';

import { FakeSidebar, PageLinks } from '../../Data';

import { Css } from './Css';
import { Table } from './Table';
import { NoCss } from './NoCss';

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
      return <NoCss FakeSidebar={FakeSidebar} onNavigation={onNavigation} />;
    case 2:
      return <Table FakeSidebar={FakeSidebar} onNavigation={onNavigation} />;
    case 3:
      return <Css FakeSidebar={FakeSidebar} onNavigation={onNavigation} />;
    default:
      return null;
  }
};
