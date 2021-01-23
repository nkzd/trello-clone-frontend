import React from 'react';
import styled from 'styled-components';
import { Check } from '@styled-icons/boxicons-regular/Check';
import { darken } from 'polished';

const LabelRectangle = ({ color, name, checked, handleLabelCheck }) => {
  return (
    <LabelRecatangleWrapper color={color} onClick={handleLabelCheck}>
      {name ? <span>{name}</span> : null}
      {checked ? <StyledCheck size={20} /> : null}
    </LabelRecatangleWrapper>
  );
};

const LabelRecatangleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.color};
  border-radius: 3px;
  color: #fff;
  font-weight: 700;
  overflow: hidden;
  padding: 4px 6px;
  font-size: 14px;
  line-height: 20px;
  min-height: 20px;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    box-shadow: -8px 0 ${(props) => darken(0.15, props.color)};
  }
`;

const StyledCheck = styled(Check)`
  color: white;
  margin-left: auto;
`;

export default LabelRectangle;
