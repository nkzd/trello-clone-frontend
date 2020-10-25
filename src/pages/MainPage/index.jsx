import React from 'react';
import styled from 'styled-components';
import HeaderBar from '../../components/HeaderBar';
import List from '../../components/List';

const MainPage = ({ lists=[] }) => {
  return (
    <MainPageWrapper>
      <HeaderBar />
      <ListsWrapper>
        {lists.map((list, index) => {
          return <List name={list.name} cards={list.cards} key={list._id} />;
        })}
      </ListsWrapper>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div``;

const ListsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
`;

export default MainPage;
