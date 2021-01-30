import React, { useState } from 'react';
import styled from 'styled-components';
import RectangularButton from '../../../RectanguralButton';
import ColorCheckbox from '../ColorCheckbox';

const CreateLabel = ({ closePopup, createLabel }) => {
  const [inputValue, setInputValue] = useState('');
  const [pickedColor, setPickedColor] = useState('#61bd4f');

  const colorsArray = [
    '#61bd4f',
    '#f2d600',
    '#ff9f1a',
    '#eb5a46',
    '#c377e0',
    '#0079bf',
    '#00c2e0',
    '#51e898',
    '#ff78cb',
    '#344563',
  ];

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createLabel({ name: inputValue, color: pickedColor });
    closePopup();
  };

  const handleColorClick = (color) => {
    setPickedColor(color);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <NameInput>
          <Subtitle>Name</Subtitle>
          <input type='text' value={inputValue} onChange={handleChange} />
        </NameInput>
        <Subtitle>Select a color</Subtitle>
        <ColorPickerWrapper>
          {colorsArray.map((color) => (
            <ColorCheckbox
              color={color}
              key={color}
              checked={pickedColor === color ? true : false}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </ColorPickerWrapper>
        <FooterWrapper>
          <RectangularButton text='Add Label' color='#5aac44' type='submit' />
        </FooterWrapper>
      </form>
    </div>
  );
};

const NameInput = styled.div`
  input {
    margin: 4px 0 12px;
    width: 100%;
    outline: none;
    border: none;
    box-shadow: inset 0 0 0 2px #dfe1e6;
    background-color: #fafbfc;
    box-sizing: border-box;
    border-radius: 3px;
    display: block;
    line-height: 20px;
    padding: 8px 12px;
    font-family: Helvetica, Arial, sans-serif;
  }
`;

const Subtitle = styled.div`
  font-weight: 700;
  color: ${props => props.theme.modalTextGrey};
  font-size: 12px;
  line-height: 16px;
  margin-top: 12px;
  margin-bottom: 4px;
`;

const ColorPickerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  margin-top: 3px;
`;

export default CreateLabel;
