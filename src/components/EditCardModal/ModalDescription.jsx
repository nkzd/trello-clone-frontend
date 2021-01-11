import React from 'react';
import styled from 'styled-components';

const ModalDescription = ({ description }) => {
  return (
    <div>
      <SubtitleWrapper>DESCRIPTION</SubtitleWrapper>
      <DescriptionWrapper>{description}</DescriptionWrapper>
    </div>
  );
};

const SubtitleWrapper = styled.p`
  color: #5e6c84;
  font-size: 12px;
`;

const DescriptionWrapper = styled.span`
  color: #5e6c84;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

export default ModalDescription;
