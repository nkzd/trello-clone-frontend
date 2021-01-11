import React from 'react';
import styled from 'styled-components';
import Names from '../../components/EditCardModal/Names';
import DeleteButton from '../../components/EditCardModal/DeleteButton';
import DueDate from '../../components/EditCardModal/DueDate';
import ModalProgressStatus from '../../components/EditCardModal/ModalProgressStatus';
import ModalLabelList from '../../components/EditCardModal/ModalLabelList';
import ModalSidebar from '../../components/EditCardModal/ModalSidebar';

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
      <ModalSidebar />
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
