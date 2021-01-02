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
  _id: '5f788feba88e353396e55ec1',
  name: 'Markoooo'
};

export const Two = Template.bind({});
Two.args = {
  _id: '5f788feba88e353396e52ec2',
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
  _id: '5f788feba88e353396e54dc3',
  name: 'With labels',
  labels: [
      {name: 'Whatever', color: "lightcoral"},
      {name: 'A', color: "lightblue"},
      {color: "lightgreen"},
      {name: 'quick brown fox jumps over a lazy dog', color: "lightgray"},
      {name: 'bo problemo', color: "lightpink"},
  ],
  descriptionStatus : true,
  dueDate: '1603651162',
  progressStatus: 'Not Started'
};

export const Four = Template.bind({});
Four.args = {
  _id: '5f788feba88e353396e54dc4',
  name: 'With labels',
  labels: [
      {name: 'Test123', color: "lightcoral"},
      {name: 'Abcd', color: "lightblue"},
      {color: "lightgreen"},
      {name: 'quick brown fox jumps over a lazy dog', color: "lightgray"},
      {name: 'bo problemo', color: "lightpink"},
  ],
  descriptionStatus : true,
  dueDate: '1603651162',
  progressStatus: 'Not Started'
};