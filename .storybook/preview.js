import withStyleProvider from './withStyleProvider';
import withRouter from './withRouter';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  withStyleProvider,
  withRouter
];
