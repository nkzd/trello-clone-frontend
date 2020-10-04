import React from 'react';
import LabelList from './index';

export default {
  title: 'LabelList',
  component: LabelList,
  decorators: [(Story) => <div style={{ width: '250px' }}><Story/></div>]
};

const Template = (args) => <LabelList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  labels: [
      {name: 'Whatever', color: "lightcoral"},
      {name: 'A', color: "lightblue"},
      {color: "lightgreen"},
      {name: 'quick brown fox jumps over a lazy dog', color: "lightgray"},
      {name: 'bo problemo', color: "lightpink"},
  ]
};