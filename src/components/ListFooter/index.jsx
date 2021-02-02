import React from 'react';
import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import { useState } from 'react';
import XButton from '../XButton';
import RectangularButton from '../RectanguralButton';
import { isNewCardValid } from '../../util/validation';

const ListFooter = ({ listId, addCard, deleteList }) => {
  const [enableForm, setEnableForm] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [validationFailed, setValidationFailed] = useState(false);
  const [validationFailedMessage, setValidationFailedMessage] = useState('');

  const handleCardClick = () => {
    setEnableForm(!enableForm);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    isNewCardValid({ name: inputValue })
      .then(() => {
        setValidationFailed(false);
        setInputValue('');
        setEnableForm(false);
        setTimeout(() => {
          addCard({ listId, name: inputValue });
        }, 200);
      })
      .catch((err) => {
        setValidationFailedMessage(err.message);
        setValidationFailed(true);
      });
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
          autoFocus={true}
          validationFailed={validationFailed}
        />
        {validationFailed ? (
          <ErrorMessage>{validationFailedMessage}</ErrorMessage>
        ) : null}

        <div>
          <RectangularButton text='Add Card' color='#5aac44' />
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
  color: ${(props) => props.theme.iconGrey};
  margin-right: 5px;
`;

const FormWrapper = styled.div`
  width: 262px;
  background-color: ${(props) => props.theme.listBackgroundLight};
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
  ${(props) =>
    props.validationFailed
      ? `border: 1px solid ${props.theme.validationFailedBorderRed}`
      : null};
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

const ErrorMessage = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.validationFailedBorderRed};
  padding: 3px;
`;

export default ListFooter;
