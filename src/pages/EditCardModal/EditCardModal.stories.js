import React from 'react';
import EditCardModal from './index';

export default {
  title: 'Modal/EditCardModal',
  component: EditCardModal,
};

const Template = (args) => <EditCardModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  listName: 'stagod',
  cardName: 'ma ide gas bre',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices porttitor dui et dictum. Vivamus urna tellus, pharetra ut risus et, congue venenatis risus. Nunc dapibus fringilla lacus sed vestibulum. Sed pellentesque est at magna volutpat vulputate ut a lacus.',
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
