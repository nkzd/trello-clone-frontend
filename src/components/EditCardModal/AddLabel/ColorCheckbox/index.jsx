import React, { useState } from 'react';
import styled from 'styled-components';
import { Check } from '@styled-icons/boxicons-regular/Check';

const ColorCheckbox = ({ color }) => {
  const [checked, setChecked] = useState(false);

  return (
    <SolidColorWrapper
      color={color}
      onClick={() => {
        setChecked(true);
      }}
    >
      {checked ? <StyledCheck size={20} /> : null}
    </SolidColorWrapper>
  );
};

const SolidColorWrapper = styled.div`
  box-sizing: border-box;
  width: 48px;
  height: 32px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  margin: 0 8px 8px 0;
  &:hover {
    filter: brightness(85%);
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCheck = styled(Check)`
  color: white;
`;

export default ColorCheckbox;
