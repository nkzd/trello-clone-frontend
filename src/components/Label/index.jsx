import React from 'react';
import styled from 'styled-components';

const Label = ({ color, name, expand, height }) => {
  return expand ? (
    <LineLabelExpanded color={color} height={height}>
      {name}
    </LineLabelExpanded>
  ) : (
    <LineLabelMini color={color} />
  );
};

const LineLabelMini = styled.div`
  display: inline-block;
  width: 40px;
  height: 8px;
  background-color: ${(props) => (props.color ? props.color : 'red')};
  border-radius: 5px;
`;

const LineLabelExpanded = styled.div`
  display: inline-block;
  font-size: 12px;
  font-weight: bolder;
  color: #fff;
  padding: 3px 10px;
  min-width: 40px;
  height: ${(props) => (props.height ? props.height : '16px')};
  line-height: ${(props) => (props.height ? props.height : '16px')};
  background-color: ${(props) => (props.color ? props.color : 'red')};
  border-radius: 5px;
  overflow: hidden;
`;

export default Label;
