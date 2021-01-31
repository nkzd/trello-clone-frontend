import React from 'react';
import { mockLists } from '../../../.storybook/mocks';
import Card from './index';

export default {
  title: 'Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ margin: '5em' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Card {...args} />;

export const One = Template.bind({});
One.args = mockLists.items[0].cards[2];

export const Two = Template.bind({});
Two.args = mockLists.items[0].cards[1];

export const Three = Template.bind({});
Three.args = mockLists.items[0].cards[0];

export const Four = Template.bind({});
Four.args = mockLists.items[1].cards[0];
