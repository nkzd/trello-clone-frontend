import React from 'react';
import ModalSidebar from './ModalSidebar';

export default {
  title: 'Modal/ModalSidebar',
  component: ModalSidebar,
};

const Template = (args) => <ModalSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  listId: '5f78411d5cd72c14cc947259',
  cardId: '5f788feba88e353396e54dc3',
};
