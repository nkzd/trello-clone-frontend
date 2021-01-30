import React from 'react';
import styled from 'styled-components';
import { TextLeft } from '@styled-icons/bootstrap/TextLeft';

const DescriptionStatus = () => (
  <span>
    <DescriptionStatusIcon size={18} />
  </span>
);

const DescriptionStatusIcon = styled(TextLeft)`
  color: ${(props) => props.theme.iconGrey};
`;

export default DescriptionStatus;
