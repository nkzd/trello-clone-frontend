import React from 'react';
import styled from 'styled-components';
import { EditAlt } from '@styled-icons/boxicons-regular/EditAlt';

const EditCardIcon = ({ className }) => (
  <Wrapper className={className}>
    <EditIcon />
  </Wrapper>
);

const EditIcon = styled(EditAlt)`
  color: #9e9e9e;
`;

const Wrapper = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 5px;
  &:hover {
    background-color: #eeeeee;
  }
  &:hover ${EditIcon} {
    color: ${(props) => props.theme.iconGrey};
  }
`;

export default EditCardIcon;
