import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { isNewListValid } from '../../util/validation';
import RectangularButton from '../RectanguralButton';
import XButton from '../XButton';

const ListName = ({ name, listId, editList }) => {
  const [enableForm, setEnableForm] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [validationFailed, setValidationFailed] = useState(false);
  const [validationFailedMessage, setValidationFailedMessage] = useState('');

  useEffect(() => {
    setInputValue(name);
  }, [name]);

  const handleNameClick = () => {
    setEnableForm(!enableForm);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const changeName = (name) => {
    editList({ listId, changes: { name: name } });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    isNewListValid({ name: inputValue })
      .then(() => {
        setValidationFailed(false);
        setInputValue('');
        setEnableForm(false);
        changeName(inputValue);
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
          <RectangularButton text='Change name' color='#5aac44' />
          <XButton onClick={handleNameClick} />
        </div>
      </form>
    </FormWrapper>
  ) : (
    <ListNameWrapper onClick={handleNameClick}>{name}</ListNameWrapper>
  );
};

const FormWrapper = styled.div`
  width: 262px;
  background-color: ${(props) => props.theme.listBackgroundLight};
  padding: 5px;
  border-radius: 5px;
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

const ListNameWrapper = styled.div`
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.validationFailedBorderRed};
  padding: 3px;
`;

export default ListName;
