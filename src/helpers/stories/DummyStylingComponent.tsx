import React, { FC } from 'react';

// eslint-disable-next-line no-unused-vars
type getDummyStylingComponentType = <T = any>(props: T) => FC<T>;

const getDummyStylingComponent: getDummyStylingComponentType = (props) => {
  /**
   * this components is only a dummy in storybook to document the overrideClasses keys;
   * Should not be available in production; hence must always be inside stories.tsx (or types.tsx);
   */
  // eslint-disable-next-line no-empty-pattern
  const DummyStylingComponent: FC<typeof props> = ({
    // root = '' // root must always exists
  }) => (
    <div>
      this story is only to document styling props
    </div>
  );

  return DummyStylingComponent;
};

export default getDummyStylingComponent;
