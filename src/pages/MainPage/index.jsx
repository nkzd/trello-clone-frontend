import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderBar from '../../components/HeaderBar';
import List from '../../components/List';
import AddAnotherList from '../../components/AddAnotherList';
import Sidebar from '../../components/Sidebar';
import { grayColor } from '../../util/constants';

const MainPage = ({ lists = [] }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [background, setBackground] = useState({
    color: grayColor,
    image: null,
  });

  const setColor = (color) => {
    setBackground({ image: null, color: color });
  };

  const setImage = (image) => {
    setBackground({ color: null, image: image });
  };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <MainPageWrapper {...background} showSidebar={showSidebar}>
      <HeaderBar handleSidebar={handleSidebar} />
      <ListsWrapper>
        {lists.map((list, index) => {
          return <List name={list.name} cards={list.cards} key={list._id} />;
        })}
        <AddAnotherList />
        <SidebarWrapper showSidebar={showSidebar}>
          <Sidebar
            setColor={setColor}
            setImage={setImage}
            closeSidebar={handleSidebar}
          />
        </SidebarWrapper>
      </ListsWrapper>
    </MainPageWrapper>
  );
};

const getBackground = ({ color, image }) => {
  return color
    ? color
    : image
    ? `url(${image}1600x900) no-repeat center center fixed`
    : '#fff';
};

const MainPageWrapper = styled.div`
  position: relative;
  background: ${(props) => getBackground(props)};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  overflow-x: ${(props) => (props.showSidebar ? 'visible' : 'hidden')};
`;

const ListsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
`;

const SidebarWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 0px;
  transform: ${(props) => (props.showSidebar ? 'translateX(0px)' : 'translateX(350px)')};
  transition: transform 0.4s linear;
`;

export default MainPage;
