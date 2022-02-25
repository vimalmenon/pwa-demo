import React from 'react';

export const Home: React.FC<any> = ({ children, show }) => {
  if (show) {
    return <div>{children}</div>;
  }
  return null;
};
