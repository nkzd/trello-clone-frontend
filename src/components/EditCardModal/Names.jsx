import React from 'react';
import styled from 'styled-components';

const Names = ({ cardName, listName }) => {
  return (
    <NamesWrapper>
      <CardNameWrapper>{cardName}</CardNameWrapper>
      <ListNameWrapper>
        in list <u>{listName}</u>
      </ListNameWrapper>
    </NamesWrapper>
  );
};

const NamesWrapper = styled.div``;
const CardNameWrapper = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #172b4d;
  line-height: 24px;
`;
const ListNameWrapper = styled.div`
  color: #5e6c84;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

export default Names;
