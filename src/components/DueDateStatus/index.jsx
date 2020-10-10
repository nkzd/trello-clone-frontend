import React from 'react';
import styled from 'styled-components';
import { Clock } from '@styled-icons/bootstrap/Clock';

const DueDateStatus = ({ color = '#616161', size = 18, text }) => {
  return (
    <DueDateStatusWrapper>
      <ClockIcon color={color} size={size} />
      <DueDateStatusText color={color} size={size}>
        {text}
      </DueDateStatusText>
    </DueDateStatusWrapper>
  );
};
const DueDateStatusWrapper = styled.span`
  
`;
const ClockIcon = styled(Clock)`
  color: ${(props) => props.color};
`;

const DueDateStatusText = styled.span`
  color: ${(props) => props.color};
  font-size: 14px;
  padding-left: 3px;
`;
export default DueDateStatus;
