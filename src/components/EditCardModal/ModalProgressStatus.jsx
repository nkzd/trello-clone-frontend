import React from 'react';

import styled from 'styled-components';
import ProgressStatus from '../Statuses/ProgressStatus';
const ModalProgressStatus = ({ progressStatus }) => {
  return (
    <ModalProgressStatusWrapper>
      <p>PROGRESS STATUS</p>
      <ProgressStatusWrapper>
        <span>{progressStatus}</span>
        <ProgressStatus progressStatus={progressStatus} />
      </ProgressStatusWrapper>
    </ModalProgressStatusWrapper>
  );
};

const ModalProgressStatusWrapper = styled.div`
  p { 
    color: ${props => props.theme.modalTextGrey};
    font-size: 12px;
  }
`;
const ProgressStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  span:first-child {
    margin-right: 5px;
  }
  span {
    color: ${props => props.theme.modalTextGrey};
  }
`;

export default ModalProgressStatus;
