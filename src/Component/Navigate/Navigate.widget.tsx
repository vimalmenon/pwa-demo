import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { useLocation } from 'react-router';

import { PageLinks } from '../../Data';

const Container = styled('div')({
  display: 'flex',
  flex: '1',
});

const SidePanel = styled('div')({
  display: 'flex',
  flex: '0 0 50px',
  justifyContent: 'center',
  alignItems: 'center',
});

const MainPanel = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
});

export const Navigate: React.FC = ({ children }) => {
  const location = useLocation();
  const { previous, next } = PageLinks[location.pathname] || {};
  return (
    <Container>
      <SidePanel>
        {previous && (
          <div>
            <Link to={previous}>
              <ArrowBackIosNewIcon />
            </Link>
          </div>
        )}
      </SidePanel>
      <MainPanel>{children}</MainPanel>
      <SidePanel>
        {next && (
          <div>
            <Link to={next}>
              <ArrowForwardIosIcon />
            </Link>
          </div>
        )}
      </SidePanel>
    </Container>
  );
};
