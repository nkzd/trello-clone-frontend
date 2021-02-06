import React, { useState } from 'react';
import styled from 'styled-components';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import XButton from '../XButton';
import RectangularButton from '../RectanguralButton';
import { isNewListValid } from '../../util/validation';

const AddAnotherList = ({ addList }) => {
  const [enableForm, setEnableForm] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [validationFailed, setValidationFailed] = useState(false);
  const [validationFailedMessage, setValidationFailedMessage] = useState('');

  const handleListClick = () => {
    setEnableForm(!enableForm);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    isNewListValid({ name: inputValue })
      .then(() => {
        setValidationFailed(false);
        setInputValue('');
        setEnableForm(false);
        addList(inputValue);
      })
      .catch((err) => {
        setValidationFailedMessage(err.message);
        setValidationFailed(true);
      });
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
          <RectangularButton text='Add List' color='#5aac44' />
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
  color: white;
  margin-right: 5px;
`;

const AddAnotherListWrapper = styled.div`
  width: 272px;
  min-width: 272px;
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
  white-space: nowrap;
`;

const FormWrapper = styled.div`
  width: 272px;
  min-width: 272px;
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

const ErrorMessage = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.validationFailedBorderRed};
`;

export default AddAnotherList;
