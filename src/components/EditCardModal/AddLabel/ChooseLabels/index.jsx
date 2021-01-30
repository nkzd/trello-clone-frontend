import React, { useState } from 'react';
import styled from 'styled-components';
import LabelRectangle from '../LabelRectangle';
import DeleteLabelIcon from './DeleteLabelIcon';

const ChooseLabels = ({
  allLabels,
  handleScreenChange,
  deleteLabel,
  patchChanges,
  labels,
}) => {
  const [checkedLabels, setCheckedLabels] = useState(labels || []);

  const handleLabelCheck = (labelId) => {
    const checkedLabelsCopy = [...checkedLabels];
    checkedLabelsCopy.includes(labelId)
      ? removeFromArray(checkedLabelsCopy, labelId)
      : checkedLabelsCopy.push(labelId);
    setCheckedLabels(checkedLabelsCopy);
    patchChanges({ labels: checkedLabelsCopy });
  };

  const removeFromArray = (array, value) => {
    const index = array.indexOf(value);
    if (index > -1) {
      array.splice(index, 1);
    }
  };

  return (
    <div>
      <LabelList>
        {allLabels.map((label) => (
          <LabelRow key={label._id}>
            <LabelRectangle
              color={label.color}
              name={label.name}
              checked={checkedLabels.includes(label._id)}
              handleLabelCheck={() => handleLabelCheck(label._id)}
            />
            <DeleteLabelIcon handleLabelDelete={() => deleteLabel(label._id)} />
          </LabelRow>
        ))}
      </LabelList>
      <CreateNewLabelButton type='button' onClick={handleScreenChange}>
        Create new label
      </CreateNewLabelButton>
    </div>
  );
};

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
