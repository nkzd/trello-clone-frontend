import React from 'react';
import styled from 'styled-components';
import ModalAttributeTitle from './common/ModalAttributeWrapper';

const ModalDescription = ({ description }) => {
  return (
    <div>
      <ModalAttributeTitle>DESCRIPTION</ModalAttributeTitle>
      <DescriptionWrapper>{description}</DescriptionWrapper>
    </div>
  );
};

const DescriptionWrapper = styled.span`
  color: ${(props) => props.theme.modalTextGrey};
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

export default ModalDescription;
