import React from 'react';
import styled from 'styled-components';
import { Clock } from '@styled-icons/bootstrap/Clock';

const DueDateStatus = ({ color = '#616161', size = 18, timestamp }) => {
  const convertTimestampToMMdd = (timestamp) => {
    const date = new Date(Number.parseInt(timestamp));
    const month = date.toLocaleString('en-us', { month: 'short' });
    const day = date.toLocaleString('en-us', { day: 'numeric' });

    return `${month}. ${day}`;
  };

  return (
    <span>
      <ClockIcon color={color} size={size} />
      <DueDateStatusText color={color} size={size}>
        {convertTimestampToMMdd(timestamp)}
      </DueDateStatusText>
    </span>
  );
};
const ClockIcon = styled(Clock)`
  color: ${(props) => props.color};
`;

const DueDateStatusText = styled.span`
  color: ${(props) => props.color};
  font-size: 14px;
  padding-left: 3px;
`;
export default DueDateStatus;
