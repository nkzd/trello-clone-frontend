import React from 'react';
import MainPage from './index';
import { One, Two, Three } from '../../components/Card/Card.stories';


export default {
  title: 'MainPage',
  component: MainPage,
};

const Template = (args) => (
  <MainPage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  lists: [
    {
      _id: '5f78411d5cd72c14cc947259',
      name: 'First list',
      cards: [
        Three.args,
        Two.args,
        One.args
      ],
      __v: 26
    },
    {
      _id: '5f787eb99d84c024bfa2bacc',
      name: 'Second list',
      cards: [
        One.args
      ],
      __v: 0
    }
  ]
}
