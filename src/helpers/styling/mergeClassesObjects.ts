import classnames from 'classnames';
import _mergeWith from 'lodash/mergeWith';

export interface ClassesDictionary extends Record<string, string>{
  root: string; // classes must have root
  // isMobile: string; // FIXME: this is work in progress to standardize isMobile
  // at root level and use cascading classes
}

export const mergeClassesObjects = <T = ClassesDictionary, O = T>(
  baseClassesObj: O extends T ? O: never, // there may be extra classes in the scss file
  // not used in the component but we want to require atleast the classes in stylingProps
  overrideClassesObj?: T,
): T => _mergeWith(
    {}, // this is needed as mergeWith mutates the first param
    baseClassesObj,
    overrideClassesObj,
    (baseValue: string, overrideValue: string) => classnames(baseValue, overrideValue),
  );
