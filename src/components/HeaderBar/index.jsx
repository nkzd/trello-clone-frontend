import React from 'react';
import styled from 'styled-components';
const HeaderBar = () => {
  return (
    <HeaderBarWrapper>
      Whateverello
    </HeaderBarWrapper>
  );
};

const HeaderBarWrapper = styled.div`
  margin: 0 auto;
  background-color: rgba(0,0,0,.32);
  font-family: 'Dancing Script', cursive;
  text-align: center;
  padding: 5px;
  font-size: 2em;
  color: #FAFAFA;
`;

export default HeaderBar;
