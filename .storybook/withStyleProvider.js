import React from 'react';
import { StylesProvider } from '@material-ui/core/styles';

const withStyleProvider = (Story) =>
  (<StylesProvider injectFirst>
    <Story />
  </StylesProvider>);

export default withStyleProvider;
