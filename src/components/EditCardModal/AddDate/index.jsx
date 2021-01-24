import React, { useState } from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import styled from 'styled-components';
import XButton from '../../XButton';

const AddDate = ({ closePopup, patchChanges }) => {
  const [selectedDay, setSelectedDay] = useState(undefined);

  const handleClose = () => {
    closePopup();
  }

  const handleDayClick = (day) => {
    setSelectedDay(day);
    patchChanges({ dueDate: day.getTime() });
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
  color: #5e6c84;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 16px;
  text-transform: uppercase;
`;

const StyledDayPicker = styled(DayPicker)`
  .DayPicker-wrapper {
    background-color: white;
  }
`;

export default AddDate;
