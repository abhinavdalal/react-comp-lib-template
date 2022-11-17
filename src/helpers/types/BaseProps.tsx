import { Ref } from 'react';

export interface BaseStylingProps {
  /**
   * override passed to the root div
   */
  root?: string;
}

export interface BaseProps<T = BaseStylingProps> {
  /**
   * optional: inner reference passed to the root div by default
   */
  innerRef?: Ref<HTMLDivElement>;
  /**
   * optional: classes with keys that will override corresponding styling points
   */
  classes?: T;
}
