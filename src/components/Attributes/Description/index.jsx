import React from 'react';
import styled from 'styled-components';
import { TextLeft } from '@styled-icons/bootstrap/TextLeft';

const Description = () => (
  <span>
    <DescriptionIcon size={18} />
  </span>
);

const DescriptionIcon = styled(TextLeft)`
  color: ${(props) => props.theme.iconGrey};
`;

export default Description;
