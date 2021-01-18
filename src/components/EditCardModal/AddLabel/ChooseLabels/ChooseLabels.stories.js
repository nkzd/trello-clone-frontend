import React from 'react';
import ChooseLabels from './index';

export default {
  title: 'Modal/ChooseLabels',
  component: ChooseLabels,
};

const Template = (args) => <ChooseLabels {...args} />;

export const Default = Template.bind({});
Default.args = {
    labels: [
        {_id:"1", name: 'Whatever', color: "lightcoral"},
        {_id:"2", name: 'A', color: "lightblue"},
        {_id:"3", color: "lightgreen"},
        {_id:"4", name: 'quick brown fox jumps over a lazy dog', color: "lightgray"},
        {_id:"5", name: 'bo problemo', color: "lightpink"},
    ]
};