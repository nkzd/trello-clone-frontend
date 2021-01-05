import React, { useState } from 'react';
import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import AddButton from '../AddButton';
import XButton from '../XButton';
const AddAnotherList = ({addList}) => {
  const [enableForm, setEnableForm] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleListClick = () => {
    setEnableForm(!enableForm);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addList(inputValue);
    setInputValue('');
    setEnableForm(false);
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
          <AddButton text='Add List' />
          <XButton onClick={handleListClick} />
        </div>
      </form>
    </FormWrapper>
  ) : (
    <AddAnotherListWrapper onClick={handleListClick}>
      <PlusIcon size={22} />
      <span>Add another list</span>
    </AddAnotherListWrapper>
  );
};

const PlusIcon = styled(Plus)`
  color: '#616161';
  margin-right: 5px;
`;

const AddAnotherListWrapper = styled.div`
  width: 272px;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  color: white;
  background-color: hsla(0, 0%, 100%, 0.24);
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.44);
  }
  cursor: pointer;
`;

const FormWrapper = styled.div`
  width: 272px;
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

export default AddAnotherList;
