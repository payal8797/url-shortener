import React from 'react';
import UrlShortener from './components/UrlShortener';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <UrlShortener />
    </Container>
  );
};

export default App;
