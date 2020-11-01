import React from 'react';
import AddCard from './index';

export default {
  title: 'AddCard',
  component: AddCard,
};

const Template = (args) => <AddCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  text: 'Add Card',
};

export const List = Template.bind({});
List.args = {
  text: 'Add List',
};
