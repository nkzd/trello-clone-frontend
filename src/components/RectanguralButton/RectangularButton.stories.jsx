import React from 'react';
import RectangularButton from './index';

export default {
  title: 'RectangularButton',
  component: RectangularButton,
};

const Template = (args) => <RectangularButton {...args} />;

export const AddCard = Template.bind({});
AddCard.args = {
  text: 'Add Card',
  color: '#5aac44',
};

export const AddList = Template.bind({});
AddList.args = {
  text: 'Add List',
  color: '#5aac44',
};

export const DeleteCard = Template.bind({});
DeleteCard.args = {
  text: 'Delete Card',
  color: '#cc0033',
};
