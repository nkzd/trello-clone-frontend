import React from 'react';
import styled from 'styled-components';

const ModalNames = ({ name, listName }) => {
  return (
    <NamesWrapper>
      <CardNameWrapper>{name}</CardNameWrapper>
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
  color: ${props => props.theme.modalTextGrey};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

export default ModalNames;
