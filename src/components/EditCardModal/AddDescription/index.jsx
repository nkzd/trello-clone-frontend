import React, { useState } from 'react';
import styled from 'styled-components';
import XButton from '../../XButton';
import RectangularButton from '../../RectanguralButton';

const AddDescription = ({ closePopup, patchChanges }) => {
  const [inputValue, setInputValue] = useState('');
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
    patchChanges({ description: inputValue });
    setInputValue('');
    closePopup();
  };

  return (
    <AddDescriptionWrapper>
      <AddDescriptionHeader>
        <FlexPlaceholder />
        <Subtitle>Description</Subtitle>
        <XButton onClick={handleClose} />
      </AddDescriptionHeader>
      <div>
        <form onSubmit={handleSubmit}>
          <StyledTextArea
            placeholder='Add a more detailed description...'
            value={inputValue}
            onChange={handleInputChange}
            wrap='soft'
            rows={7}
          />
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
    </AddDescriptionWrapper>
  );
};

const AddDescriptionWrapper = styled.div`
  box-sizing: border-box;
  padding: 12px;
  width: 310px;
  background-color: white;
`;

const FlexPlaceholder = styled.div`
  width: 26px;
`;

const AddDescriptionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
  margin-bottom: 10px;
`;

const Subtitle = styled.span`
  color: #5e6c84;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 16px;
  text-transform: uppercase;
`;

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5px;
  resize: none;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default AddDescription;
