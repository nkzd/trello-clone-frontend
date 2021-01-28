import React, { useState } from 'react';
import styled from 'styled-components';
import RectangularButton from '../../RectanguralButton';
import ProgressStatus from '../../Statuses/ProgressStatus';
import XButton from '../../XButton';

const AddProgress = ({ closePopup, patchChanges, progressStatus }) => {
  const [selectedValue, setSelectedValue] = useState(progressStatus);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    patchChanges({ progressStatus: selectedValue });
    closePopup();
  };

  const handleDelete = (event) => {
    event.preventDefault();
    patchChanges({ progressStatus: null });
    closePopup();
  };

  const handleClose = () => {
    closePopup();
  };

  return (
    <AddProgressWrapper>
      <AddProgressHeader>
        <FlexPlaceholder />
        <Subtitle>Progress</Subtitle>
        <XButton onClick={handleClose} />
      </AddProgressHeader>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <RadioWrapper>
            <input
              type='radio'
              value='Not Started'
              checked={selectedValue === 'Not Started'}
              name='progress'
              id='Not Started'
              onChange={handleChange}
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
              id='In-Progress'
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
              id='On-Hold'
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
              id='Cancelled'
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
              id='Complete'
              onChange={handleChange}
            />
            <label htmlFor='Complete'>Complete</label>
            <ProgressStatus progressStatus='Complete' />
          </RadioWrapper>
          <ButtonsWrapper>
            <RectangularButton
              text='Add Progress'
              color='#5aac44'
              type='submit'
            />
            <RectangularButton
              text='Delete Progress'
              color='#cf513d'
              type='button'
              onClick={handleDelete}
            />
          </ButtonsWrapper>
        </form>
      </FormWrapper>
    </AddProgressWrapper>
  );
};

const AddProgressWrapper = styled.div`
  box-sizing: border-box;
  padding: 12px;
  width: 292px;
  background-color: white;
`;

const FlexPlaceholder = styled.div`
  width: 26px;
`;

const AddProgressHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
  margin-bottom: 10px;
`;

const Subtitle = styled.span`
  color: ${(props) => props.theme.modalTextGrey};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 16px;
  text-transform: uppercase;
`;

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
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default AddProgress;
