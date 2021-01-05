import styled from 'styled-components';
import { X } from '@styled-icons/boxicons-regular/X';

const XButton = styled(X)`
  width: 26px;
  height: 26px;
  color: #42526e;
  &:hover {
    color: #172b4d;
  }
  cursor: pointer;
`;

export default XButton;
