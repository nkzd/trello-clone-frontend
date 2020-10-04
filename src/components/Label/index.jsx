import React from 'react';
import styled from 'styled-components';

const Label = ({color, text, expand, height}) => {
  return <LineLabel color={color} />;
};

const LineLabel = styled.div`
  width: 40px;
  height: 8px;
  background-color: ${(props) => (props.color ? props.color : "red")};
  border-radius: 5px;
`;

export default Label;
