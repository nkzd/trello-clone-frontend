import React from 'react';
import styled from 'styled-components';
import { Clock } from '@styled-icons/bootstrap/Clock';

const DueDateStatus = ({ timestamp }) => {
  const convertTimestampToMMdd = (timestamp) => {
    const date = new Date(Number.parseInt(timestamp));
    const month = date.toLocaleString('en-us', { month: 'short' });
    const day = date.toLocaleString('en-us', { day: 'numeric' });

    return `${month}. ${day}`;
  };

  return (
    <span>
      <ClockIcon size={18} />
      <DueDateStatusText size={18}>
        {convertTimestampToMMdd(timestamp)}
      </DueDateStatusText>
    </span>
  );
};
const ClockIcon = styled(Clock)`
  color: ${(props) => props.theme.iconGrey};
`;

const DueDateStatusText = styled.span`
  color: ${(props) => props.theme.iconGrey};
  font-size: 14px;
  padding-left: 3px;
`;
export default DueDateStatus;
