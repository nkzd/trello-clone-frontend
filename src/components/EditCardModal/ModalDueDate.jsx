import React from 'react';
import DueDateStatus from '../Statuses/DueDateStatus';
import styled from 'styled-components';
const ModalDueDate = ({ dueDate }) => {
  return (
    <DueDateWrapper>
      <p>DUE DATE</p>
      <DueDateStatus timestamp={dueDate} />
    </DueDateWrapper>
  );
};

const DueDateWrapper = styled.div`
  p {
    color: ${(props) => props.theme.modalTextGrey};
    font-size: 12px;
  }
`;

export default ModalDueDate;
