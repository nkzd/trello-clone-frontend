import React, { useState } from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import styled from 'styled-components';
import RectangularButton from '../../RectanguralButton';
import XButton from '../../XButton';
import AddAttributeHeader from '../common/AddAttributeHeader';
import AddAttributeSubtitle from '../common/AddAttributeSubtitle';
import AddAttributeWrapper from '../common/AddAttributeWrapper';
import FlexPlaceholder from '../common/FlexPlaceholder';

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
    <AddAttributeWrapper>
      <AddAttributeHeader>
        <FlexPlaceholder />
        <AddAttributeSubtitle>Due Date</AddAttributeSubtitle>
        <XButton onClick={handleClose} />
      </AddAttributeHeader>
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
    </AddAttributeWrapper>
  );
};

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
