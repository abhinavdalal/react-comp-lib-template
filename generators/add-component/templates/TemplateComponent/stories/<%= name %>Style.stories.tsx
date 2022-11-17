import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { <%= name %>StylingProps } from '../<%= name %>.types';
import Dummy<%= name %>StyleComponent from './Dummy<%= name %>StylingComponent';

export default {
  title: 'Components/<%= name %>/Style',
  component: Dummy<%= name %>StyleComponent,
} as Meta;

// eslint-disable-next-line operator-linebreak
const StyleTemplate: Story<<%= name %>StylingProps> =
  (args) => <Dummy<%= name %>StyleComponent {...args} />;

export const <%= name %>Style = StyleTemplate.bind({});
