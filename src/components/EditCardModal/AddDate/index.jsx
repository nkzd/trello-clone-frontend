import React, { useState } from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import styled from 'styled-components';
import RectangularButton from '../../RectanguralButton';
import XButton from '../../XButton';

const AddDate = ({ closePopup, patchChanges, dueDate }) => {
  const [selectedDay, setSelectedDay] = useState(new Date(dueDate));

  const handleClose = () => {
    closePopup();
  };

  const handleSubmit = () => {
    patchChanges({ dueDate: selectedDay.getTime() });
    closePopup();
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleDelete = () => {
    patchChanges({ dueDate: null });
    closePopup();
  };

  return (
    <AddDateWrapper>
      <AddDateHeader>
        <FlexPlaceholder />
        <Subtitle>Due Date</Subtitle>
        <XButton onClick={handleClose} />
      </AddDateHeader>
      <StyledDayPicker onDayClick={handleDayClick} selectedDays={selectedDay} />
      <ButtonsWrapper>
        <RectangularButton
          text='Add Date'
          color='#5aac44'
          type='button'
          onClick={handleSubmit}
        />
        <RectangularButton
          text='Delete Date'
          color='#cf513d'
          type='button'
          onClick={handleDelete}
        />
      </ButtonsWrapper>
    </AddDateWrapper>
  );
};

const AddDateWrapper = styled.div`
  box-sizing: border-box;
  padding: 12px;
  width: 292px;
  background-color: white;
`;

const FlexPlaceholder = styled.div`
  width: 26px;
`;

const AddDateHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
  margin-bottom: 10px;
`;

const Subtitle = styled.span`
    color: ${props => props.theme.modalTextGrey};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 16px;
  text-transform: uppercase;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledDayPicker = styled(DayPicker)`
  .DayPicker-wrapper {
    background-color: white;
  }
`;

export default AddDate;
