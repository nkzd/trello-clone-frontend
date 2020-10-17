import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
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
  name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend'
};

const MainPage = () => {
  return (
    <MainPageWrapper>
      <HeaderBar />
      <ListsWrapper>
        <List name='completed'>
          <Card {...demoArgs} />
          <Card {...demoArgs} />
          <Card {...demoArgs3} />
        </List>
        <List name='completed'>
          <Card {...demoArgs} />
          <Card {...demoArgs2} />
          <Card {...demoArgs} />
        </List>
        <List name='completed'>
        </List>
        <List name='completed'>
          <Card {...demoArgs3} />
          <Card {...demoArgs} />
        </List>
      </ListsWrapper>
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div``;

const ListsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export default MainPage;
