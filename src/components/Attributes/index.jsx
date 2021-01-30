import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import DueDate from './DueDate';
import ProgressStatus from './ProgressStatus';

const Attributes = ({ description, dueDate, progressStatus }) => {
  return (
    <AttributesWrapper>
      {description ? <Description /> : null}
      {dueDate ? <DueDate timestamp={dueDate} /> : null}
      {progressStatus ? (
        <ProgressStatus progressStatus={progressStatus} />
      ) : null}
    </AttributesWrapper>
  );
};
const AttributesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > * {
      margin-right: 7px;
    }
`;

export default Attributes;
