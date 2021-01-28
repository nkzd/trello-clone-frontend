import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import XButton from '../../XButton';
import ChooseLabels from '../../../containers/ChooseLabels';
import CreateLabel from '../../../containers/CreateLabel';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';
import AddAttributeWrapper from '../common/AddAttributeWrapper';
import AddAttributeHeader from '../common/AddAttributeHeader';
import FlexPlaceholder from '../common/FlexPlaceholder';
import AddAttributeSubtitle from '../common/AddAttributeSubtitle';

const AddLabel = ({ closePopup, patchChanges, labels }) => {
  const [screen, setScreen] = useState('chooseLabel');

  const handleScreenChange = () => {
    setScreen(screen === 'chooseLabel' ? 'newLabel' : 'chooseLabel');
  };

  return (
    <AddAttributeWrapper>
      <AddAttributeHeader>
        {screen === 'chooseLabel' ? (
          <FlexPlaceholder />
        ) : (
          <ArrowBackButton onClick={handleScreenChange} />
        )}

        <AddAttributeSubtitle>
          {screen === 'chooseLabel' ? 'Labels' : 'Create Label'}
        </AddAttributeSubtitle>
        <XButton onClick={closePopup} />
      </AddAttributeHeader>
      <ScreenWrapper>
        {screen === 'chooseLabel' ? (
          <ChooseLabels
            handleScreenChange={handleScreenChange}
            patchChanges={patchChanges}
            labels={labels}
          />
        ) : (
          <CreateLabel closePopup={closePopup} />
        )}
      </ScreenWrapper>
    </AddAttributeWrapper>
  );
};

const ArrowBackButton = styled(ArrowBack)`
  width: 18px;
  height: 18px;
  color: #42526e;
  &:hover {
    color: #172b4d;
  }
  cursor: pointer;
`;

const ScreenWrapper = styled.div``;

export default AddLabel;
