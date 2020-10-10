import React from 'react';
import styled from 'styled-components';
import { TextLeft } from '@styled-icons/bootstrap/TextLeft';

const DescriptionStatus = ({ size, color }) => (
  <DescriptionStatusIcon color={color} size={size} />
);

const DescriptionStatusIcon = styled(TextLeft)`
  color: ${(props) => props.color};
`;

export default DescriptionStatus;
