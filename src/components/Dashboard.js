import React from 'react';
import styled from 'styled-components';
import DashboardHeader from './DashboardHeader ';
import DashboardMain from './DashboardMain ';

const DashboardContainer = styled.div`
  flex: 1;
  background-color: #262626;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardHeader />
      <DashboardMain />
    </DashboardContainer>
  );
};

export default Dashboard;
