import React from 'react';

import { Header } from '../../Header';
import { Footer } from '../../Footer';
import { Sidebar } from '../../Sidebar';
import styled from '@emotion/styled';

const Container = styled('section')({
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
});

export const Css: React.FC<any> = ({ title, children, show }) => {
  if (show) {
    return (
      <Container>
        <Header />
        <Sidebar />
        <section>
          <div>
            <h1>{title}</h1>
          </div>
          <div>{children}</div>
        </section>
        <Footer />
      </Container>
    );
  }
  return null;
};
