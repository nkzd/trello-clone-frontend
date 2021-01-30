import React from 'react';
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { StopCircle } from '@styled-icons/boxicons-regular/StopCircle';
import { Play } from '@styled-icons/boxicons-regular/Play';
import { PauseCircle } from '@styled-icons/boxicons-regular/PauseCircle';
import { X } from '@styled-icons/boxicons-regular/X';
import { Check } from '@styled-icons/boxicons-regular/Check';

const ProgressStatus = ({ progressStatus }) => {
  switch (progressStatus) {
    case 'Not Started':
      return (
        <IconStyleWrapper>
          <StopCircle size={20} />
        </IconStyleWrapper>
      );

    case 'In-Progress':
      return (
        <IconStyleWrapper>
          <Play size={20} />
        </IconStyleWrapper>
      );

    case 'On-Hold':
      return (
        <IconStyleWrapper>
          <PauseCircle size={20} />
        </IconStyleWrapper>
      );

    case 'Cancelled':
      return (
        <IconStyleWrapper>
          <X size={20} />
        </IconStyleWrapper>
      );

    case 'Complete':
      return (
        <IconStyleWrapper>
          <Check size={20} />
        </IconStyleWrapper>
      );

    default:
      return (
        <IconStyleWrapper>
          <StopCircle size={20} />
        </IconStyleWrapper>
      );
  }
};

export const IconStyleWrapper = styled.span`
  ${StyledIconBase} {
    color: ${(props) => props.theme.iconGrey};
  }
`;

export default ProgressStatus;
