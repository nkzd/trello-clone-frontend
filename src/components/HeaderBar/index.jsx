import React from 'react';
import styled from 'styled-components';
import { DotsHorizontalRounded } from '@styled-icons/boxicons-regular/DotsHorizontalRounded';

const HeaderBar = () => {
  return (
    <HeaderBarWrapper>
      <div>Whateverello</div>
      <DotsIcon size={25} />
    </HeaderBarWrapper>
  );
};

const DotsIcon = styled(DotsHorizontalRounded)`
display: inline-block;
  color: white;
`;

const HeaderBarWrapper = styled.div`
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.32);
  font-family: 'Dancing Script', cursive;
  padding: 5px;
  font-size: 2em;
  color: #fafafa;

    display: grid; 
    grid-template-columns: 1fr auto 1fr;
    align-items: center;

    div {
        grid-column-start: 2;
    }

    ${DotsIcon} {
        margin-left: auto;
        &:hover {
            color: #616161;
        }
    }
`;

export default HeaderBar;
