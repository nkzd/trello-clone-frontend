import React from 'react';
import styled from 'styled-components';
import XButton from '../XButton';
import {
  grayColor,
  blueColor,
  redColor,
  greenColor,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
  bg6,
} from '../../util/constants';

const Sidebar = ({ setColor, setImage, closeSidebar }) => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <span className='flexAlign' />
        <span>Background</span>
        <XButton onClick={closeSidebar} />
      </SidebarHeader>
      <hr />
      <SidebarBody>
        <ColorClickWrapper handleClick={setColor} color={grayColor} />
        <ColorClickWrapper handleClick={setColor} color={blueColor} />
        <ColorClickWrapper handleClick={setColor} color={redColor} />
        <ColorClickWrapper handleClick={setColor} color={greenColor} />
        <ImageClickWrapper handleClick={setImage} image={bg1} />
        <ImageClickWrapper handleClick={setImage} image={bg2} />
        <ImageClickWrapper handleClick={setImage} image={bg3} />
        <ImageClickWrapper handleClick={setImage} image={bg4} />
        <ImageClickWrapper handleClick={setImage} image={bg5} />
        <ImageClickWrapper handleClick={setImage} image={bg6} />
      </SidebarBody>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.listBackgroundLight};
  width: 340px;
  hr {
    margin: 0px;
  }
  border-radius: 5px;
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
  padding: 10px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
`;

const ColorClickWrapper = ({ color, handleClick }) => (
  <SolidColorWrapper color={color} onClick={() => handleClick(color)} />
);

const ImageClickWrapper = ({ image, handleClick }) => (
  <ImageWrapper src={`${image}152x96`} onClick={() => handleClick(image)} />
);

const SolidColorWrapper = styled.div`
  box-sizing: border-box;
  width: 152px;
  height: 96px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  margin: 5px;
`;

const ImageWrapper = styled.img`
  box-sizing: border-box;
  width: 152px;
  height: 96px;
  border-radius: 5px;
  margin: 5px;
`;

export default Sidebar;
