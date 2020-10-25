import React from 'react';
import styled from 'styled-components';
import HeaderBar from '../../components/HeaderBar';
import List from '../../components/List';

const demoArgs = {
  name: 'With labels',
  labels: [
    { name: 'Whatever', color: 'lightcoral' },
    { name: 'A', color: 'lightblue' },
    { color: 'lightgreen' },
    { name: 'quick brown fox jumps over a lazy dog', color: 'lightgray' },
    { name: 'bo problemo', color: 'lightpink' },
  ],
  descriptionStatus: true,
  dueDate: 'Oct 9',
  progressStatus: 'Not Started',
};

const demoArgs2 = {
  name: 'With labels',
  descriptionStatus: true,
  progressStatus: 'Not Started',
};

const demoArgs3 = {
  name:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend',
};

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
