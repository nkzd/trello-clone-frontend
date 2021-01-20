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
  labels: [1,2,3,4,5],
  allLabels: [
    {_id: 1, name: 'Whatever', color: "lightcoral"},
    {_id: 2,name: 'A', color: "lightblue"},
    {_id: 3,color: "lightgreen"},
    {_id: 4,name: 'quick brown fox jumps over a lazy dog', color: "lightgray"},
    {_id: 5,name: 'bo problemo', color: "lightpink"},
]
};