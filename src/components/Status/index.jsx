import React from 'react';
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { StopCircle } from '@styled-icons/boxicons-regular/StopCircle';
import { Play } from '@styled-icons/boxicons-regular/Play';
import { PauseCircle } from '@styled-icons/boxicons-regular/PauseCircle';
import { X } from '@styled-icons/boxicons-regular/X';
import { Check } from '@styled-icons/boxicons-regular/Check';

const Status = ({ status }) => {
  switch (status) {
    case 'Not Started':
      return (
        <IconStyleWrapper>
          <StopCircle size='18' />
        </IconStyleWrapper>
      );

    case 'In-Progress':
      return (
        <IconStyleWrapper>
          <Play size='18' />
        </IconStyleWrapper>
      );

    case 'On-Hold':
      return (
        <IconStyleWrapper>
          <PauseCircle size='18' />
        </IconStyleWrapper>
      );

    case 'Cancelled':
      return (
        <IconStyleWrapper>
          <X size='18' />
        </IconStyleWrapper>
      );

    case 'Complete':
      return (
        <IconStyleWrapper>
          <Check size='18' />
        </IconStyleWrapper>
      );

    default:
      return (
        <IconStyleWrapper>
          <StopCircle size='18' />
        </IconStyleWrapper>
      );
  }
};

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: #aaaaaa;
  }
`;

export default Status;
