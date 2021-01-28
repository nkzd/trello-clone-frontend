import React from 'react';

import styled from 'styled-components';
import ProgressStatus from '../Statuses/ProgressStatus';
import ModalAttributeTitle from './common/ModalAttributeWrapper';
const ModalProgressStatus = ({ progressStatus }) => {
  return (
    <div>
      <ModalAttributeTitle>PROGRESS STATUS</ModalAttributeTitle>
      <ProgressStatusWrapper>
        <span>{progressStatus}</span>
        <ProgressStatus progressStatus={progressStatus} />
      </ProgressStatusWrapper>
    </div>
  );
};

const ProgressStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  span:first-child {
    margin-right: 5px;
  }
  span {
    color: ${(props) => props.theme.modalTextGrey};
  }
`;

export default ModalProgressStatus;
