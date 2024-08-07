import React from 'react';
import styled from 'styled-components';
import { FaBars,FaHome, FaChartBar, FaClipboardList, FaRegChartBar, FaBoxOpen } from 'react-icons/fa'; // Import necessary icons

const SidebarContainer = styled.div`
  width: 60px; /* Adjusted width to match image */
  background-color: #1c1c1e;
  display: flex;
  flex-direction: column;
  padding: 20px 0; /* Adjusted padding */
  color: white;
  align-items: center; /* Center icons horizontally */

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const SidebarItem = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center; /* Center icons vertically */
  width: 100%; /* Make each item take the full width */
  height: 50px; /* Fixed height for items */

  &:hover {
    background-color: #333;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const Icon = styled.div`
  font-size: 1.5rem; /* Adjust icon size */
  color: gray; /* Color to match image */
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
       <SidebarItem>
        <Icon><FaBars style={{color:'#5567FF'}}/></Icon>
      </SidebarItem>
      <SidebarItem>
        <Icon><FaHome style={{color:'#5567FF'}}/></Icon>
      </SidebarItem>
      <SidebarItem>
        <Icon><FaChartBar /></Icon>
      </SidebarItem>
      <SidebarItem>
        <Icon><FaClipboardList /></Icon>
      </SidebarItem>
      <SidebarItem>
        <Icon><FaRegChartBar /></Icon>
      </SidebarItem>
      <SidebarItem>
        <Icon><FaBoxOpen /></Icon>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
