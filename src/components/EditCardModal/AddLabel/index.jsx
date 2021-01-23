import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import XButton from '../../XButton';
import ChooseLabels from '../../../containers/ChooseLabels';
import CreateLabel from '../../../containers/CreateLabel';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';

const AddLabel = ({ closePopup, patchChanges }) => {
  const [screen, setScreen] = useState('chooseLabel');

  const handleScreenChange = () => {
    setScreen(screen === 'chooseLabel' ? 'newLabel' : 'chooseLabel');
  };

  return (
    <AddLabelWrapper>
      <AddLabelHeader>
        {screen === 'chooseLabel' ? (
          <FlexPlaceholder />
        ) : (
          <ArrowBackButton onClick={handleScreenChange} />
        )}

        <Subtitle>
          {screen === 'chooseLabel' ? 'Labels' : 'Create Label'}
        </Subtitle>
        <XButton onClick={closePopup} />
      </AddLabelHeader>
      <ScreenWrapper>
        {screen === 'chooseLabel' ? (
          <ChooseLabels
            handleScreenChange={handleScreenChange}
            patchChanges={patchChanges}
          />
        ) : (
          <CreateLabel closePopup={closePopup} />
        )}
      </ScreenWrapper>
    </AddLabelWrapper>
  );
};

const Subtitle = styled.span`
  color: #5e6c84;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 16px;
  text-transform: uppercase;
`;

const AddLabelWrapper = styled.div`
  box-sizing: border-box;
  padding: 12px;
  width: 292px;
  background-color: white;
`;

const AddLabelHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
  margin-bottom: 10px;
`;

const FlexPlaceholder = styled.div`
  width: 26px;
`;

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
