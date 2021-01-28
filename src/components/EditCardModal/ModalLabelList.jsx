import React from 'react';
import styled from 'styled-components';
import Label from '../Label';
import ModalAttributeTitle from './common/ModalAttributeWrapper';

const ModalLabelList = ({ allLabels, labels }) => {
  return (
    <div>
      <ModalAttributeTitle>LABEL LIST</ModalAttributeTitle>
      <LabelListWrapper>
        {labels.map((labelId) => {
          const resultLabel = allLabels.find((label) => label._id === labelId);
          return resultLabel ? (
            <Label
              key={resultLabel._id}
              color={resultLabel.color}
              name={resultLabel.name}
              expand={true}
            />
          ) : null;
        })}
      </LabelListWrapper>
    </div>
  );
};

const LabelListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > *:last-child {
    margin-right: 0px;
  }
  & > * {
    margin: 3px 3px 3px 0px;
  }
`;

export default ModalLabelList;
