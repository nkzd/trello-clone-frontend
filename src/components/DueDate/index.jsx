import React from 'react';
import styled from 'styled-components';
import { Clock } from '@styled-icons/bootstrap/Clock';

const DueDate = ({ color, size, text }) => {
  return (
    <>
      <ClockIcon color={color} size={size} />
      <DueDateText color={color} size={size}>
        {text}
      </DueDateText>
    </>
  );
};

const ClockIcon = styled(Clock)`
  color: ${(props) => props.color};
`;

const DueDateText = styled.span`
  color: ${(props) => (props.color ? props.color : "red")};
  font-size: 14px;
  line-height: 14px;
  padding: 5px;
`;
export default DueDate;
