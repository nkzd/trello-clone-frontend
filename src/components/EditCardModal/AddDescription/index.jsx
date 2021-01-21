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

  //TODO validacija
  const handleSubmit = (event) => {
    event.preventDefault();
    patchChanges({ description: inputValue });
    setInputValue('');
    closePopup();
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <StyledTextArea
          placeholder='Add a more detailed description...'
          value={inputValue}
          onChange={handleInputChange}
          wrap='soft'
          rows={5}
        />
        <div>
          <RectangularButton text='Add Description' color='#5aac44' />
          <XButton onClick={handleClose} />
        </div>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 300px;
  /* background-color: #ebecf0; */
  padding: 10px;
  border-radius: 5px;
  ${XButton} {
    margin-left: 5px;
  }
`;

const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 5px;
  resize: none;
`;

export default AddDescription;
