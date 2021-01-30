import React from 'react';
import DueDate from '../Attributes/DueDate';
import ModalAttributeTitle from './common/ModalAttributeWrapper';

const ModalDueDate = ({ dueDate }) => {
  return (
    <div>
      <ModalAttributeTitle>DUE DATE</ModalAttributeTitle>
      <DueDate timestamp={dueDate} />
    </div>
  );
};

export default ModalDueDate;
