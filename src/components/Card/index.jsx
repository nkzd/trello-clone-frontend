import React, { useState } from 'react';
import styled from 'styled-components';
import Attributes from '../Attributes';
import LabelList from '../../containers/LabelList';
import EditCardIcon from '../EditCardIcon';

const Card = ({ labels, name, progressStatus, description, dueDate }) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <CardWrapper
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {labels ? <LabelList labels={labels} /> : null}
      <NameWrapper>{name}</NameWrapper>
      <Attributes
        description={description}
        progressStatus={progressStatus}
        dueDate={dueDate}
      />
      {isCardHovered ? <StyledEditIcon /> : null}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 256px;
  padding: 8px;
  background-color: #fff;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 8px;
  min-height: 32px;
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 10px;
  }
  & > *:first-child {
    margin-top: 0px;
  }
`;

const StyledEditIcon = styled(EditCardIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
  margin-top: 0px;
`;

const NameWrapper = styled.div`
  word-wrap: break-word;
`;

export default Card;
