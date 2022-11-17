import getDummyComponent from '~/helpers/stories/DummyStylingComponent';
import { <%= name %>StylingProps } from '../<%= name %>.types';

/**
 * this component is only a dummy in storybook to document the overrideClasses keys;
 * Should not be available in production; hence must always be inside stories.tsx (or types.tsx);
 */
const Dummy<%= name %>StylingComponent = getDummyComponent<<%= name %>StylingProps>({});

export default Dummy<%= name %>StylingComponent;
