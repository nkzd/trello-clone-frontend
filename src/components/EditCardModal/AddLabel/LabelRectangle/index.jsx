import React from 'react';
import styled from 'styled-components';
import { Check } from '@styled-icons/boxicons-regular/Check';

const LabelRectangle = ({ color, name, checked }) => {
  return (
    <LabelRecatangleWrapper color={color}>
      {name ? <span>{name}</span> : null}
      {checked ? <StyledCheck size={20} /> : null}
    </LabelRecatangleWrapper>
  );
};

const LabelRecatangleWrapper = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  min-height: 20px;
  padding: 6px 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledCheck = styled(Check)`
  color: white;
  margin-left: auto;
`;

export default LabelRectangle;
