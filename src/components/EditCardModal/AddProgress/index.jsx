import React, { useState } from 'react';
import styled from 'styled-components';
import RectangularButton from '../../RectanguralButton';
import ProgressStatus from '../../Statuses/ProgressStatus';
import XButton from '../../XButton';

const AddProgress = ({ closePopup }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event) => {
    closePopup();
    event.preventDefault();
  };

  const handleClose = () => {
    closePopup();
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <RadioWrapper>
          <input
            type='radio'
            value='Not Started'
            checked={selectedValue === 'Not Started'}
            name='progress'
            onChange={handleChange}
            id='Not Started'
          />
          <label htmlFor='Not Started'>Not Started</label>
          <ProgressStatus progressStatus='Not Started' />
        </RadioWrapper>
        <RadioWrapper>
          <input
            type='radio'
            value='In-Progress'
            checked={selectedValue === 'In-Progress'}
            name='progress'
            onChange={handleChange}
          />
          <label htmlFor='In-Progress'>In-Progress</label>
          <ProgressStatus progressStatus='In-Progress' />
        </RadioWrapper>
        <RadioWrapper>
          <input
            type='radio'
            value='On-Hold'
            checked={selectedValue === 'On-Hold'}
            name='progress'
            onChange={handleChange}
          />

          <label htmlFor='On-Hold'>On-Hold</label>
          <ProgressStatus progressStatus='On-Hold' />
        </RadioWrapper>
        <RadioWrapper>
          <input
            type='radio'
            value='Cancelled'
            checked={selectedValue === 'Cancelled'}
            name='progress'
            onChange={handleChange}
          />
          <label htmlFor='Cancelled'>Cancelled</label>
          <ProgressStatus progressStatus='Cancelled' />
        </RadioWrapper>
        <RadioWrapper>
          <input
            type='radio'
            value='Complete'
            checked={selectedValue === 'Complete'}
            name='progress'
            onChange={handleChange}
          />
          <label htmlFor='Complete'>Complete</label>
          <ProgressStatus progressStatus='Complete' />
        </RadioWrapper>
        <FooterWrapper>
          <RectangularButton
            text='Add Progress'
            color='#5aac44'
            type='submit'
          />
          <XButton onClick={handleClose} />
        </FooterWrapper>
      </form>
    </FormWrapper>
  );
};

const RadioWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr 1fr;
  grid-gap: 0.5em;
  padding: 10px;
  label {
    align-self: center;
  }
`;

const FormWrapper = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  border-radius: 5px;
  ${XButton} {
    margin-left: 5px;
  }
`;

const FooterWrapper = styled.div`
  padding: 5px;
`;

export default AddProgress;
