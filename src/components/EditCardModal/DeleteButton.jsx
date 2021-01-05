import React from 'react';
import styled from 'styled-components';

const DeleteButton = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #cc0033;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }
`;

export default DeleteButton;
