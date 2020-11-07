import React from 'react';
import styled from 'styled-components';
import XButton from '../XButton';
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <span className="flexAlign" />
        <span>Background</span>
        <XButton />
      </SidebarHeader>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  box-sizing: border-box;
  background: rgba(9, 30, 66, 0.08);
  width: 340px;
`;

const SidebarHeader = styled.div`
  color: #172b4d;
  display: flex;
  padding: 10px 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .flexAlign {
    display: inline-block;
    width: 26px;
    height:26px;
  }
`;

export default Sidebar;
