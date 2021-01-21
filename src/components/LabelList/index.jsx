import React, { useState } from 'react';
import styled from 'styled-components';
import Label from '../Label';
const LabelList = ({ labels, allLabels }) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = (event) => {
    setExpand(!expand);
    event.stopPropagation();
  };

  return (
    <LabelListWrapper onClick={handleExpand}>
      {labels.map((labelId) => {
        const resultLabel = allLabels.find((label) => label._id === labelId);
        return resultLabel ? (
          <Label
            key={resultLabel._id}
            color={resultLabel.color}
            name={resultLabel.name}
            expand={expand}
          />
        ) : null;
      })}
    </LabelListWrapper>
  );
};

const LabelListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  &:hover {
    filter: brightness(85%);
  }

  & > *:last-child {
    margin-right: 0px;
  }
  & > * {
    margin: 3px 3px 3px 0px;
  }
`;

export default LabelList;
