import React from 'react';
import { useLocation } from 'react-router';
import { FakeLinks, PageLinks } from '../../Data';

import { Table } from './Table';
import { NoCss } from './NoCss';
import { Css } from './Css';

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
      return <NoCss FakeLinks={FakeLinks} onNavigation={onNavigation} />;
    case 2:
      return <Table FakeLinks={FakeLinks} onNavigation={onNavigation} />;
    case 3:
      return <Css FakeLinks={FakeLinks} onNavigation={onNavigation} />;
    default:
      return null;
  }
};
