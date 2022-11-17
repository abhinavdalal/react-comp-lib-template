import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import <%= name %> from '../<%= name %>';

import { <%= name %>Props } from '../<%= name %>.types';

import classes from './<%= name %>-WithClasses.module.scss';

export default {
  title: 'Components/<%= name %>',
  component: <%= name %>,
} as Meta;

const Template: Story<<%= name %>Props> = (args) => <<%= name %> {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  // NOTE: put your common args here
};

export const FixedWidth = Template.bind({});
FixedWidth.args = {
  ...Basic.args,
  classes,
};
