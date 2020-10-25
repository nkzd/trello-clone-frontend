import React from 'react';
import List from './index';
import Card from '../Card/'
import { Three, Two, One } from '../Card/Card.stories.js';


export default {
  title: 'List',
  component: List,
};

const Template = (args) => (
  <List {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Work Work',
  cards: [
    Three.args,
    Two.args,
    One.args
  ]
}

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'In-Progress',
  cards: [
    One.args
  ]
}

export const NoCards = Template.bind({});
NoCards.args = {
  name: 'Backend'
}