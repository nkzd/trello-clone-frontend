import React from 'react';
import styled from 'styled-components';

const Label = ({ color, text, expand, height }) => {
  return expand ? (
    <LineLabelExtended color={color} height={height}>
      {text}
    </LineLabelExtended>
  ) : (
    <LineLabelMini color={color} />
  );
};

const LineLabelMini = styled.div`
  width: 40px;
  height: 8px;
  background-color: ${(props) => (props.color ? props.color : 'red')};
  border-radius: 5px;
`;

const LineLabelExtended = styled.span`
  display: inline-block;
  font-size: 12px;
  font-weight: bolder;
  color: #fff;
  padding: 3px 10px;
  height: ${(props) => (props.height ? props.height : '16px')};
  line-height: ${(props) => (props.height ? props.height : '16px')};
  background-color: ${(props) => (props.color ? props.color : 'red')};
  border-radius: 5px;
`;

export default Label;
