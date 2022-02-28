import React from 'react';
import { useLocation } from 'react-router-dom';
import { PageLinks } from '../../Data';

import { NoCss } from './NoCss';
import { Table } from './Table';

export const Content: React.FC = () => {
  const location = useLocation();
  const { id } = PageLinks[location.pathname] || {};
  switch (id) {
    case 1:
      return <NoCss />;
    case 2:
      return <Table />;
    default:
      return null;
  }
};
