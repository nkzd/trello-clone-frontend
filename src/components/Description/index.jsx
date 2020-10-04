import React from 'react';
import styled from 'styled-components';
import { TextLeft } from '@styled-icons/bootstrap/TextLeft';

const Description = ({ size, color }) => (
  <DescriptionIcon color={color} size={size} />
);

const DescriptionIcon = styled(TextLeft)`
  color: ${(props) => props.color};
`;

export default Description;
