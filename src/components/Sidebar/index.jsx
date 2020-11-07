import React from 'react';
import styled from 'styled-components';
import XButton from '../XButton';
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <span className='flexAlign' />
        <span>Background</span>
        <XButton />
      </SidebarHeader>
      <hr />
      <SidebarBody>
        <SolidColorWrapper color='rgb(131, 140, 145)' />
        <SolidColorWrapper color='rgb(0, 121, 191);' />
        <SolidColorWrapper color='rgb(176, 70, 50)' />
        <SolidColorWrapper color='rgb(75, 191, 107)' />
      </SidebarBody>
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
    height: 26px;
  }
`;

const SidebarBody = styled.div`
  width: 340px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  height: 100vh;
`;

const SolidColorWrapper = styled.div`
  box-sizing: border-box;
  width: 152px;
  height: 96px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  margin: 5px;
`;

export default Sidebar;
