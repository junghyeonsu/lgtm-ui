import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Alert } from './index';

export default {
  title: 'lgtm/Alert',
  component: Alert,
  argTypes: {},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
