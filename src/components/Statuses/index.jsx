import React from 'react';
import styled from 'styled-components';
import DescriptionStatus from '../DescriptionStatus';
import DueDateStatus from '../DueDateStatus';
import ProgressStatus from '../ProgressStatus';

const Statuses = ({ descriptionStatus, dueDate, progressStatus }) => {
  return (
    <StatusesWrapper>
      {descriptionStatus ? <DescriptionStatus /> : null}
      {dueDate ? <DueDateStatus unixTimestamp={dueDate} /> : null}
      {progressStatus ? (
        <ProgressStatus progressStatus={progressStatus} />
      ) : null}
    </StatusesWrapper>
  );
};
const StatusesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * {
      margin-right: 7px;
    }
`;

export default Statuses;
