import React, { useState } from 'react';
import styled from 'styled-components';
import XButton from '../../XButton';
import RectangularButton from '../../RectanguralButton';
import AddAttributeWrapper from '../common/AddAttributeWrapper';
import AddAttributeHeader from '../common/AddAttributeHeader';
import FlexPlaceholder from '../common/FlexPlaceholder';
import AddAttributeSubtitle from '../common/AddAttributeSubtitle';
import { isNewDescriptionValid } from '../../../util/validation';

const AddDescription = ({ closePopup, patchChanges, description }) => {
  const [inputValue, setInputValue] = useState(description);
  const [validationFailed, setValidationFailed] = useState(false);
  const [validationFailedMessage, setValidationFailedMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClose = () => {
    closePopup();
  };

  const handleDelete = (event) => {
    event.preventDefault();
    patchChanges({ description: '' });
    setInputValue('');
    closePopup();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    isNewDescriptionValid({ description: inputValue })
      .then(() => {
        setValidationFailed(false);
        patchChanges({ description: inputValue });
        setInputValue('');
        closePopup();
      })
      .catch((err) => {
        setValidationFailedMessage(err.message);
        setValidationFailed(true);
      });
  };

  return (
    <AddAttributeWrapper width='310px'>
      <AddAttributeHeader>
        <FlexPlaceholder />
        <AddAttributeSubtitle>Description</AddAttributeSubtitle>
        <XButton onClick={handleClose} />
      </AddAttributeHeader>
      <div>
        <form onSubmit={handleSubmit}>
          <StyledTextArea
            placeholder='Add a more detailed description...'
            value={inputValue}
            onChange={handleInputChange}
            wrap='soft'
            rows={7}
            validationFailed={validationFailed}
          />
          {validationFailed ? (
            <ErrorMessage>{validationFailedMessage}</ErrorMessage>
          ) : null}
          <ButtonsWrapper>
            <RectangularButton
              text='Add Description'
              color='#5aac44'
              type='submit'
            />
            <RectangularButton
              text='Delete Description'
              color='#cf513d'
              type='button'
              onClick={handleDelete}
            />
          </ButtonsWrapper>
        </form>
      </div>
    </AddAttributeWrapper>
  );
};

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5px;
  resize: none;
  ${(props) =>
    props.validationFailed
      ? `border: 1px solid ${props.theme.validationFailedBorderRed}`
      : null};
  font-family: Tahoma, sans-serif;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ErrorMessage = styled.div`
  padding: 3px;
  font-size: 12px;
  color: ${(props) => props.theme.validationFailedBorderRed};
`;

export default AddDescription;
