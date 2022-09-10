import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Checkbox } from './index';

export default {
  title: 'lgtm/Checkbox',
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
