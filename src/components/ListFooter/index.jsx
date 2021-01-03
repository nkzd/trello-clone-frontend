import React from 'react';
import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { useState } from 'react';
import AddButton from '../AddButton';
import XButton from '../XButton';

const ListFooter = () => {
  const [enableForm, setEnableForm] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCardClick = () => {
    setEnableForm(!enableForm);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {};

  return enableForm ? (
    <FormWrapper>
      <form>
        <StyledInput
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        />
        <div>
          <AddButton text='Add Card' onClick={handleSubmit} />
          <XButton onClick={handleCardClick} />
        </div>
      </form>
    </FormWrapper>
  ) : (
    <ListFooterWrapper onClick={handleCardClick}>
      <PlusIcon size={20} />
      <span>Add another card</span>
    </ListFooterWrapper>
  );
};

const PlusIcon = styled(Plus)`
  color: '#616161';
  margin-right: 5px;
`;

const FormWrapper = styled.div`
  width: 262px;
  background-color: #ebecf0;
  padding: 5px;
  border-radius: 5px;
  ${XButton} {
    margin-left: 5px;
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  line-height: 20px;
  padding: 6px 12px;
  margin-bottom: 5px;
`;

const ListFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
  }
`;

export default ListFooter;
