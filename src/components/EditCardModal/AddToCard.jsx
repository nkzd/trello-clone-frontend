import React from 'react';
import styled from 'styled-components';
import { PurchaseTagAlt } from '@styled-icons/boxicons-regular/PurchaseTagAlt';
import { Clock } from '@styled-icons/bootstrap/Clock';
import { Check } from '@styled-icons/boxicons-regular/Check';
import { TextLeft } from '@styled-icons/bootstrap/TextLeft';
import AddDate from './AddDate';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AddDescription from './AddDescription';
import AddProgress from './AddProgress';
import AddLabel from './AddLabel';

const AddToCard = ({ type, listId, cardId, editCard, lists }) => {
  const patchChanges = (changes) => {
    editCard({ listId, cardId, changes });
  };

  const listIndex = lists.findIndex((list) => list._id === listId);
  const cardIndex = lists[listIndex].cards.findIndex(
    (card) => card._id === cardId
  );
  const { description, labels, progressStatus, dueDate } = lists[
    listIndex
  ].cards[cardIndex];

  const renderSwitch = (type) => {
    switch (type) {
      case 'labels': {
        return (
          <StyledPopup
            arrow={false}
            trigger={
              <IconWrapper>
                <PurchaseTagAlt size={14} />
                <span>LABELS</span>
              </IconWrapper>
            }
            position='bottom'
            nested
          >
            {(close) => (
              <div>
                <AddLabel
                  closePopup={close}
                  patchChanges={patchChanges}
                  labels={labels}
                />
              </div>
            )}
          </StyledPopup>
        );
      }
      case 'duedate': {
        return (
          <StyledPopup
            arrow={false}
            trigger={
              <IconWrapper>
                <Clock size={14} />
                <span>DUE DATE</span>
              </IconWrapper>
            }
            position='bottom'
            nested
          >
            {(close) => (
              <div>
                <AddDate
                  closePopup={close}
                  patchChanges={patchChanges}
                  dueDate={dueDate}
                />
              </div>
            )}
          </StyledPopup>
        );
      }
      case 'progress': {
        return (
          <StyledPopup
            arrow={false}
            trigger={
              <IconWrapper>
                <Check size={14} />
                <span>PROGRESS STATUS</span>
              </IconWrapper>
            }
            position='bottom'
            nested
          >
            {(close) => (
              <div>
                <AddProgress
                  closePopup={close}
                  patchChanges={patchChanges}
                  progressStatus={progressStatus}
                />
              </div>
            )}
          </StyledPopup>
        );
      }
      case 'description': {
        return (
          <StyledPopup
            arrow={false}
            trigger={
              <IconWrapper>
                <TextLeft size={14} />
                <span>DESCRIPTION</span>
              </IconWrapper>
            }
            position='bottom'
            nested
          >
            {(close) => (
              <div>
                <AddDescription
                  closePopup={close}
                  patchChanges={patchChanges}
                  description={description}
                />
              </div>
            )}
          </StyledPopup>
        );
      }
      default:
        break;
    }
  };

  return <AddToCardWrappper>{renderSwitch(type)}</AddToCardWrappper>;
};

const AddToCardWrappper = styled.div`
  padding: 6px 12px;
  background-color: rgba(9, 30, 66, 0.04);
  color: #172b4d;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    color: #5e6c84;
    font-size: 12px;
  }
`;

const IconWrapper = styled.div`
  color: #5e6c84;
  cursor: pointer;
  span {
    margin-left: 5px;
  }
`;

const StyledPopup = styled(Popup)`
  &-content {
    user-select: none;
    width: auto !important;
  }
`;

export default AddToCard;
