import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from '../Component';

import { Routes as routes } from '../Data';

export const Main: React.FC = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route, key) => {
          const { Component, path } = route;
          return (
            <React.Fragment key={key}>
              <Route path={path} element={<Component />} />
            </React.Fragment>
          );
        })}
      </Routes>
    </Layout>
  );
};
