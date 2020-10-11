import React from 'react';
import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
const ListHeader = () => {
  return (
    <ListHeaderWrapper>
      <PlusIcon size={20} />
      <span>Add another card</span>
    </ListHeaderWrapper>
  );
};

const PlusIcon = styled(Plus)`
  color: '#616161';
  margin-right: 5px;
`;

const ListHeaderWrapper = styled.div`
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
  }
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export default ListHeader;