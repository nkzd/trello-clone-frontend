import React from 'react';
import styled from 'styled-components';
import Label from '../Label';

const ModalLabelList = ({ labels }) => {
  return (
    <ModalLabelListWrapper>
      <p>LABEL LIST</p>
      <LabelListWrapper>
        {labels.map((label, index) => {
          return (
            <Label
              key={index}
              color={label.color}
              name={label.name}
              expand={true}
            />
          );
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
