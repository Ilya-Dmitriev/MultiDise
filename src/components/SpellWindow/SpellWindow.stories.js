import React from 'react';

import { SpellWindow } from './SpellWindow';

export default {
  args: {},
  component: SpellWindow,
  title: 'Components/SpellWindow',
};

const Template = (args) => {
  return <SpellWindow {...args} />;
};

export const Story = Template.bind({});
Story.args = {};
