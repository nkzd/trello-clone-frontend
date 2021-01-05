import React from 'react';
import DueDateStatus from '../DueDateStatus';
import styled from 'styled-components';
const DueDate = ({ dueDate }) => {
  return (
    <DueDateWrapper>
      <p>DUE DATE</p>
      <DueDateStatus unixTimestamp={dueDate} />
    </DueDateWrapper>
  );
};

const DueDateWrapper = styled.div`
  p {
    color: #5e6c84;
    font-size: 12px;
  }
`;

export default DueDate;
