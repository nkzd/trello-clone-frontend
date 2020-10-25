import React from 'react';
import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
const ListFooter = () => {
  return (
    <ListFooterWrapper>
      <PlusIcon size={20} />
      <span>Add another card</span>
    </ListFooterWrapper>
  );
};

const PlusIcon = styled(Plus)`
  color: '#616161';
  margin-right: 5px;
`;

const ListFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
  }
`;

export default ListFooter;
