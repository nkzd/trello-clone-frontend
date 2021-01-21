import React from 'react';
import styled from 'styled-components';
import Label from '../Label';

const ModalLabelList = ({ allLabels, labels }) => {
  return (
    <ModalLabelListWrapper>
      <p>LABEL LIST</p>
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
    </ModalLabelListWrapper>
  );
};

const ModalLabelListWrapper = styled.div`
  p {
    color: #5e6c84;
    font-size: 12px;
  }
`;

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
