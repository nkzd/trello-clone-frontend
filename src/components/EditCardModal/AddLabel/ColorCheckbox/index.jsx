import React from 'react';
import styled from 'styled-components';
import { Check } from '@styled-icons/boxicons-regular/Check';

const ColorCheckbox = ({ color, checked, onClick }) => {
  return (
    <SolidColorWrapper color={color} onClick={onClick}>
      {checked ? <StyledCheck size={20} /> : null}
    </SolidColorWrapper>
  );
};

const SolidColorWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 32px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  margin: 0 6px 6px 0;

  &:hover {
    filter: brightness(85%);
  }
`;

const StyledCheck = styled(Check)`
  color: white;
`;

export default ColorCheckbox;
