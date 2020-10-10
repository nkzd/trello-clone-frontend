import React from 'react';
import styled from 'styled-components';
import { Clock } from '@styled-icons/bootstrap/Clock';

const DueDateStatus = ({ color="#616161", size=18, text }) => {
  return (
    <>
      <ClockIcon color={color} size={size} />
      <DueDateStatusText color={color} size={size}>
        {text}
      </DueDateStatusText>
    </>
  );
};

const ClockIcon = styled(Clock)`
  color: ${(props) => props.color};
`;

const DueDateStatusText = styled.span`
  color: ${(props) => (props.color ? props.color : "red")};
  font-size: 14px;
  line-height: 14px;
  padding: 5px;
`;
export default DueDateStatus;
