import React from 'react';
import styled from 'styled-components';
import ListFooter from '../ListFooter';

const List = ({ name, children }) => {
  return (
    <ListWrapper>
      <ListNameWrapper>{name}</ListNameWrapper>
      {children}
      <ListFooter />
    </ListWrapper>
  );
};

const ListNameWrapper = styled.div`
  font-weight: bold;
  padding: 10px;
`;

const ListWrapper = styled.div`
  box-sizing: border-box;
  flex: 0 0 272px;
  width: 272px;
  margin: 0 5px;
  background-color: #ebecf0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default List;
