import React from 'react';
import Names from '../../components/EditCardModal/Names';
import DeleteButton from '../../components/EditCardModal/DeleteButton';
import DueDate from '../../components/EditCardModal/DueDate';
import styled from 'styled-components';
import ModalProgressStatus from '../../components/EditCardModal/ModalProgressStatus';
import ModalLabelList from '../../components/EditCardModal/ModalLabelList';

const EditCardModal = ({
  listName,
  cardName,
  dueDate,
  progressStatus,
  labels,
}) => {
  return (
    <EditCardModalWrapper>
      <div>
        <Names listName={listName} cardName={cardName} />
        <DueDate dueDate={dueDate} />
        <ModalProgressStatus progressStatus={progressStatus} />
        <ModalLabelList labels={labels} />
        <DeleteButton text='Delete Card' />
      </div>
      <div>x</div>
    </EditCardModalWrapper>
  );
};

const EditCardModalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(150px, 25%);
  background-color: #f4f5f7;
  padding: 10px;
`;

export default EditCardModal;
