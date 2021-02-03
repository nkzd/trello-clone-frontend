import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderBar from '../../components/HeaderBar';
import List from '../../components/List';
import AddAnotherList from '../../containers/AddAnotherList';
import Sidebar from '../../components/Sidebar';
import { grayColor } from '../../util/unsplashConstants';
import { DragDropContext } from 'react-beautiful-dnd';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainPage = ({ lists = [], reorderCards }) => {
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
        <DragDropContext onDragEnd={reorderCards}>
          {lists.map((list, index) => {
            return (
              <List
                name={list.name}
                cards={list.cards}
                key={list._id}
                listId={list._id}
              />
            );
          })}
        </DragDropContext>
        <AddAnotherList />
        <SidebarWrapper showSidebar={showSidebar}>
          <Sidebar
            setColor={setColor}
            setImage={setImage}
            closeSidebar={handleSidebar}
          />
        </SidebarWrapper>
      </ListsWrapper>
      <ToastContainer
        position='bottom-left'
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </MainPageWrapper>
  );
};

const getBackground = ({ color, image }) => {
  return color
    ? color
    : image
    ? `url(${image}${window.innerWidth}x${window.innerHeight}) no-repeat center center fixed`
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
  transform: ${(props) =>
    props.showSidebar ? 'translateX(0px)' : 'translateX(350px)'};
  transition: transform 0.4s linear;
`;

export default MainPage;
