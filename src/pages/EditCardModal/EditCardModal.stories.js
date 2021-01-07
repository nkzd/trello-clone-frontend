import React from 'react';
import EditCardModal from './index';

export default {
  title: 'EditCardModal',
  component: EditCardModal,
};

const Template = (args) => <EditCardModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  listName: 'stagod',
  cardName: 'ma ide gas bre',
  dueDate: '1603651162',
  progressStatus: 'Not Started',
  labels: [
    { name: 'Whatever', color: 'lightcoral' },
    { name: 'A', color: 'lightblue' },
    { color: 'lightgreen' },
    {
      name: 'quick brown fox jumps over a lazy dog',
      color: 'lightgray',
    },
    { name: 'bo problemo', color: 'lightpink' },
  ],
};
