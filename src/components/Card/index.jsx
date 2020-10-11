import React from 'react';
import styled from 'styled-components';
import Statuses from '../Statuses';
import LabelList from '../LabelList';

//potencijalno samo ID ubaci, a iz contexta pokupi sta trebas
const Card = ({ labels, name, progressStatus, descriptionStatus, dueDate }) => (
  <CardWrapper>
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
  width: 250px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 8px;
  max-width: 300px;
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
