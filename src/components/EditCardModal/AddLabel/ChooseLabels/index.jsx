import React from 'react';
import styled from 'styled-components';
import LabelRectangle from '../LabelRectangle';
import DeleteLabelIcon from './DeleteLabelIcon';

const ChooseLabels = ({ allLabels, handleScreenChange, deleteLabel }) => {
  return (
    <ChooseLabelsWrapper>
      <LabelList>
        {allLabels.map((label) => (
          <LabelRow key={label._id}>
            <LabelRectangle
              color={label.color}
              name={label.name}
              checked={false}
            />
            <DeleteLabelIcon onClick={() => deleteLabel(label._id)} />
          </LabelRow>
        ))}
      </LabelList>
      <CreateNewLabelButton type='button' onClick={handleScreenChange}>
        Create new label
      </CreateNewLabelButton>
    </ChooseLabelsWrapper>
  );
};

const ChooseLabelsWrapper = styled.div``;

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

const CreateNewLabelButton = styled.button`
  display: block;
  width: 100%;
  background-color: rgba(9, 30, 66, 0.07);
  border-radius: 3px;
  border: none;
  box-shadow: none;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  color: #172b4d;
  font-size: 14px;
  padding: 6px 12px;
  margin-top: 12px;
`;

export default ChooseLabels;
