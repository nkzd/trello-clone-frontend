import React from 'react';
import styled from 'styled-components';
import ModalNames from '../../components/EditCardModal/ModalNames';
import DeleteButton from '../../components/EditCardModal/DeleteButton';
import ModalDueDate from '../../components/EditCardModal/ModalDueDate';
import ModalProgressStatus from '../../components/EditCardModal/ModalProgressStatus';
import ModalLabelList from '../../components/EditCardModal/ModalLabelList';
import ModalSidebar from '../../components/EditCardModal/ModalSidebar';
import ModalDescription from '../../components/EditCardModal/ModalDescription';

const EditCardModal = ({
  listName,
  cardName,
  description,
  dueDate,
  progressStatus,
  labels,
}) => {
  return (
    <EditCardModalWrapper>
      <ParagraphWrapper>
        <ModalNames listName={listName} cardName={cardName} />
        <ModalDescription description={description} />
        <ModalDueDate dueDate={dueDate} />
        <ModalProgressStatus progressStatus={progressStatus} />
        <ModalLabelList labels={labels} />
        <DeleteButton text='Delete Card' />
      </ParagraphWrapper>
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

const ParagraphWrapper = styled.div`
  & > * {
    padding: 5px;
  }
`;

export default EditCardModal;
