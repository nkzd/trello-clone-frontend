import React from 'react';
import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { useState } from 'react';
import XButton from '../XButton';
import RectangularButton from '../RectanguralButton';

const ListFooter = ({ listId, addCard, deleteList }) => {
  const [enableForm, setEnableForm] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCardClick = () => {
    setEnableForm(!enableForm);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addCard({ listId, name: inputValue });
    setInputValue('');
    setEnableForm(false);
  };

  const handleDeleteListClick = () => {
    deleteList(listId);
  };

  return enableForm ? (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        />
        <div>
          <RectangularButton text='Add List' color='#5aac44' />
          <XButton onClick={handleCardClick} />
        </div>
      </form>
    </FormWrapper>
  ) : (
    <ListFooterWrapper>
      <AddAnotherCardWrapper onClick={handleCardClick}>
        <PlusIcon size={20} />
        <span>Add another card</span>
      </AddAnotherCardWrapper>
      <XButton onClick={handleDeleteListClick} />
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

const AddAnotherCardWrapper = styled.div`
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

const ListFooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 256px;
`;

export default ListFooter;
