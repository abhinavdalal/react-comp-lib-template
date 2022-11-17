import { BaseStylingProps, BaseProps } from '~/helpers/types/BaseProps';

export interface <%= name %>StylingProps extends BaseStylingProps {
  /**
   * Add styling props here with comments!
   */
}

export interface <%= name %>Props<T = <%= name %>StylingProps> extends BaseProps<T> {
  /**
   * Add your component props here with comments!
   */
}
