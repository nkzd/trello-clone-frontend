import React from 'react';
import styled from 'styled-components';
import { X } from '@styled-icons/boxicons-regular/X';

const DeleteLabelIcon = () => (
  <Wrapper>
    <DeleteIcon />
  </Wrapper>
);

const DeleteIcon = styled(X)`
  color: #9e9e9e;
`;

const Wrapper = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  background-color: white;
  &:hover {
    background-color: #EEEEEE;
  }
  &:hover ${DeleteIcon} {
    color: #616161;
  }
`;

export default DeleteLabelIcon;