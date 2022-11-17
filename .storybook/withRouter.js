import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const withRouter = (Story) =>
  (<Router>
    <Story />
  </Router>);

export default withRouter;
