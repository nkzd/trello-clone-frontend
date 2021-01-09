import React from 'react';
import styled from 'styled-components';
import { PurchaseTagAlt } from '@styled-icons/boxicons-regular/PurchaseTagAlt';
import { Clock } from '@styled-icons/bootstrap/Clock';
import { Check } from '@styled-icons/boxicons-regular/Check';
import { TextLeft } from '@styled-icons/bootstrap/TextLeft';

const AddToCard = ({ type }) => {
  const renderSwitch = (type) => {
    switch (type) {
      case 'labels': {
        return (
          <IconWrapper>
            <PurchaseTagAlt size={14} />
            <span>LABELS</span>
          </IconWrapper>
        );
      }
      case 'duedate': {
        return (
          <IconWrapper>
            <Clock size={14} />
            <span>DUE DATE</span>
          </IconWrapper>
        );
      }
      case 'progress': {
        return (
          <IconWrapper>
            <Check size={14} />
            <span>PROGRESS STATUS</span>
          </IconWrapper>
        );
      }
      case 'description': {
        return (
          <IconWrapper>
            <TextLeft size={14} />
            <span>DESCRIPTION</span>
          </IconWrapper>
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
  span {
    margin-left: 5px;
  }
`;

export default AddToCard;
