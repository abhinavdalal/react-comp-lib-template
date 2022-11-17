import React, {
  FC, useMemo, forwardRef,
} from 'react';

import { mergeClassesObjects } from '~/helpers/styling/mergeClassesObjects';

import classes from './<%= name %>.module.scss';
import { <%= name %>Props, <%= name %>StylingProps } from './<%= name %>.types';

const <%= name %>WithInnerRef: FC<<%= name %>Props> = ({
  innerRef = null,
  classes: overrideClasses = {},
}) => {
  const mergedClasses = useMemo(
    () => mergeClassesObjects<<%= name %>StylingProps>(classes, overrideClasses),
    [overrideClasses],
  );

  return (
    <div
      ref={innerRef}
      className={mergedClasses.root}
    >
      <%= name %> - Add your component's code here!
    </div>
  );
};

/**
 * [<%= name %> - see the latest storybook](https://www.chromatic.com/component?appId=app_id_to_be_changed_here&name=Components%2F<%= name %>&mode=docs)
 *
 * one line description of component goes here (try to describe in ~80 chars max)
 *
 * if your seeing this; <%= user %> was too lazy to describe this component;
 * EXAMPLE - will call onClick handler passed when clicked;
 * EXAMPLE - component container set to take width 100%;
 * EXAMPLE - minimum height is 1rem;
 * EXAMPLE - backgroud shade becomes darker on hover;
 */
const <%= name %> = forwardRef<HTMLDivElement, Omit<<%= name %>Props, 'innerRef'>>(
  (props, ref) => <<%= name %>WithInnerRef innerRef={ref} {...props} />,
);

export default <%= name %>;
