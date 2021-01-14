import React, { useState } from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';
import styled from 'styled-components';

const DatePicker = ({closePopup}) => {
  const [selectedDay, setSelectedDay] = useState(undefined);

  //tipa date
  //na klik kroz reducer dodaj u karticu duedate
  const handleDayClick = (day) => {
    setSelectedDay(day);
    closePopup();
  };

  return <StyledDayPicker onDayClick={handleDayClick} selectedDays={selectedDay} />;
};

const StyledDayPicker = styled(DayPicker)`
  .DayPicker-wrapper {
    background-color: white;
    border: 1px solid #E8E8E8;
  }
`;

export default DatePicker;
