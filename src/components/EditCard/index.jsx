import React from 'react';
import styled from 'styled-components';
import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt';

const EditCard = () => (
  <Wrapper>
    <EditIcon />
  </Wrapper>
);

const EditIcon = styled(EditAlt)`
  color: #9e9e9e;
`;

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: white;
  &:hover {
    background-color: #EEEEEE;
  }
  &:hover ${EditIcon} {
    color: #616161;
  }
`;

export default EditCard;
