import React from 'react';
import DueDateStatus from '../Statuses/DueDateStatus';
import ModalAttributeTitle from './common/ModalAttributeWrapper';

const ModalDueDate = ({ dueDate }) => {
  return (
    <div>
      <ModalAttributeTitle>DUE DATE</ModalAttributeTitle>
      <DueDateStatus timestamp={dueDate} />
    </div>
  );
};

export default ModalDueDate;
