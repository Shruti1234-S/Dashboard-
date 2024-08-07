import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <AppContainer>
      <Sidebar />
      <Dashboard />
    </AppContainer>
  );
}

export default App;
