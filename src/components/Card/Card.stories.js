import React from 'react';
import Card from './index';

export default {
  title: 'Card',
  component: Card,
  decorators: [(Story) => <div style={{ margin: '5em' }}><Story/></div>],
};

const Template = (args) => <Card {...args} />;

export const One = Template.bind({});
One.args = {
  name: 'Markoooo'
};

export const Two = Template.bind({});
Two.args = {
  name: 'With labels',
  labels: [
      {name: 'Whatever', color: "lightcoral"},
      {name: 'A', color: "lightblue"},
      {color: "lightgreen"},
      {name: 'quick brown fox jumps over a lazy dog', color: "lightgray"},
      {name: 'bo problemo', color: "lightpink"},
  ]
};

export const Three = Template.bind({});
Three.args = {
  name: 'With labels',
  labels: [
      {name: 'Whatever', color: "lightcoral"},
      {name: 'A', color: "lightblue"},
      {color: "lightgreen"},
      {name: 'quick brown fox jumps over a lazy dog', color: "lightgray"},
      {name: 'bo problemo', color: "lightpink"},
  ],
  descriptionStatus : true,
  dueDate: 'Oct 9',
  progressStatus: 'Not Started'
};