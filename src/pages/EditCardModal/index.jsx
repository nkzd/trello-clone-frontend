import React from 'react';
import styled from 'styled-components';
import ModalNames from '../../components/EditCardModal/ModalNames';
import ModalDueDate from '../../components/EditCardModal/ModalDueDate';
import ModalProgressStatus from '../../components/EditCardModal/ModalProgressStatus';
import ModalLabelList from '../../containers/ModalLabelList';
import ModalSidebar from '../../components/EditCardModal/ModalSidebar';
import ModalDescription from '../../components/EditCardModal/ModalDescription';
import RectangularButton from '../../components/RectanguralButton';

const EditCardModal = ({
  listName,
  listId,
  _id: cardId,
  name: cardName,
  description,
  dueDate,
  progressStatus,
  labels,
  deleteCard,
}) => {
  return (
    <EditCardModalWrapper>
      <ParagraphWrapper>
        <ModalNames listName={listName} name={cardName} />
        {description ? <ModalDescription description={description} /> : null}
        {dueDate ? <ModalDueDate dueDate={dueDate} /> : null}
        {progressStatus ? (
          <ModalProgressStatus progressStatus={progressStatus} />
        ) : null}
        {labels && labels.length !== 0 ? (
          <ModalLabelList labels={labels} />
        ) : null}
      </ParagraphWrapper>
      <ModalSidebar listId={listId} cardId={cardId} />
      <RectangularButtonWrapper>
        <RectangularButton
          text='Delete Card'
          color='#cc0033'
          onClick={() => {
            deleteCard({ listId, cardId });
          }}
        />
      </RectangularButtonWrapper>
    </EditCardModalWrapper>
  );
};

const EditCardModalWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(150px, 25%);
  grid-auto-rows: min-content;
  background-color: #f4f5f7;
  padding: 10px;
`;

const ParagraphWrapper = styled.div`
  & > * {
    padding: 5px;
  }
`;

const RectangularButtonWrapper = styled.div`
  margin-top: 5px;
  width: 150px;
`;

export default EditCardModal;
