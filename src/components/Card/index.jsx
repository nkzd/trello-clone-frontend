import React from 'react';
import styled from 'styled-components';
import Statuses from '../Statuses';
import LabelList from '../LabelList';

const Card = ({ labels, name, progressStatus, descriptionStatus, dueDate }) => (
  <CardWrapper onClick={()=>alert("hehe")}>
    {labels ? <LabelList labels={labels} /> : null}
    <NameWrapper>{name}</NameWrapper>
    <Statuses
      descriptionStatus={descriptionStatus}
      progressStatus={progressStatus}
      dueDate={dueDate}
    />
  </CardWrapper>
);

const CardWrapper = styled.div`
  box-sizing: border-box;
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

const NameWrapper = styled.div`
  word-wrap: break-word;
`;

export default Card;
