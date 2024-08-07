import React from 'react';
import styled from 'styled-components';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge'; // Import Badge from Material-UI

// Styled components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchBar = styled.input`
  padding: 10px 10px 10px 40px;
  border-radius: 5px;
  border: none;
  width: 100%;
  background-color: gray;
  outline: none;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 10px;
  pointer-events: none;
  color: white;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

// Styled component for the Badge dot
const StyledBadge = styled(Badge)`
  & .MuiBadge-dot {
    background-color: #5567FF; // Color of the notification dot
  }
`;

// DashboardHeader component
const DashboardHeader = () => {
  const hasNotifications = true; // This would be dynamic based on your logic

  return (
    <HeaderContainer>
      <SearchBarContainer>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <SearchBar placeholder="Search..." />
      </SearchBarContainer>
      <HeaderInfo>
        <IconWrapper>
          <MailIcon style={{ color: 'gray' }} />
          <StyledBadge
            color="error"
            variant="dot"
            overlap="circular"
            invisible={!hasNotifications} // Toggle visibility based on notification state
          >
            <NotificationsIcon style={{ color: 'gray' }} />
          </StyledBadge>
          <SettingsIcon style={{ color: 'gray' }} />
          <AccountCircleIcon style={{ color: 'gray' }} />
        </IconWrapper>
      </HeaderInfo>
    </HeaderContainer>
  );
};

export default DashboardHeader;
