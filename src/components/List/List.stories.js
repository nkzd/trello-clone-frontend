// List.stories.js

import React from 'react';
import List from './index';
import Card from '../Card/'
import { Three } from '../Card/Card.stories.js';


export default {
  title: 'List',
  component: List,
};

const Template = (args) => (
  <List {...args}>
    <Card {...Three.args} />
    <Card {...Three.args} />
    <Card {...Three.args} />
  </List>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Completed'
}

const TemplateNoCards = (args) => (
  <List {...args}>
  </List>
);

export const NoCards = TemplateNoCards.bind({});
NoCards.args = {
  name: 'Backend'
}