import React from 'react';

import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { Sidebar } from '../../Sidebar';

export const Css: React.FC<any> = ({ title, children, show }) => {
  if (show) {
    return (
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
    );
  }
  return null;
};
