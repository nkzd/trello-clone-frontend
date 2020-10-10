import React, { useState } from 'react';
import styled from 'styled-components';
import Label from '../Label';
const LabelList = ({ labels }) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <LabelListWrapper onClick={handleExpand}>
      {labels.map((label, index) => {
        return (
          <Label
            key={index}
            color={label.color}
            name={label.name}
            expand={expand}
          />
        );
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
