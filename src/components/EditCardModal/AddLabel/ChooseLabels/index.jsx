import React from 'react';
import styled from 'styled-components';
import LabelRectangle from '../LabelRectangle';
import DeleteLabelIcon from './DeleteLabelIcon';

const ChooseLabels = ({ labels }) => {
  return (
    <ChooseLabelsWrapper>
      <Subtitle>Labels</Subtitle>
      <LabelList>
        {labels.map((label) => (
          <LabelRow key={label._id}>
            <LabelRectangle
              color={label.color}
              name={label.name}
              checked={false}
            />
            <DeleteLabelIcon />
          </LabelRow>
        ))}
      </LabelList>
    </ChooseLabelsWrapper>
  );
};

const ChooseLabelsWrapper = styled.div``;

const Subtitle = styled.div`
  color: #5e6c84;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const LabelList = styled.div`
  & > * {
    margin-top: 10px;
  }
  & > *:first-child {
    margin-top: 0px;
  }
`;

const LabelRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 10px;
  align-items: center;
`;

export default ChooseLabels;
