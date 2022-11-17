# **React Components Library**

This is a library of react components that can be used accross many projects.

## Link to storybook

We are using chromatic to check for differences before delpoying. 

The [storybook](https://www.chromatic.com/library?appId=app_id_to_be_added) is available via the storybook library.

## How to import

import the published [package](https://github.com/link_to_built_package)

```js
npm install npm_package_name
```
note: the package version should follow semver ( i.e. MAJOR.MINOR.PATCH)

to use a component import it via destructuring:

```js
import Component from 'npm_package_name/ComponentName';
```
- this library requires following **peerDependencies**; however some components maynot require material-ui(ref current components below):
```json
  {
    "@material-ui/core": "~4.11.0",
    "@material-ui/icons": "~4.9.1",
    "classnames": "^2.2.6",
    "lodash": "^4.17.10",
    "react": "^16.13.1",
    "react-router-dom": "^5.1.2",
    "react-transition-group": "^2.2.1"
  }
```

- note: full `typescript` support will be available for all components including the override classes prop (see next section)

## How to override styles

- Every component accepts a `classes` object prop that can be used to override its internal css props to various parts of the component.
- the keys to the classes object of a component are well documented in the storybook under the section 'styles'; should also be available via the typescript autocomplete in mordern ide like vs-code.
- it will always contain atleast a root key which should be applied at the highest level of tha component.
- example for ProfileNav:
 we use `justify-content: flex-end;` by default in its root since its usage is expected to be as right aligned; however if there is an instance where this component needs to be right aligned then we can do the following:
  ```scss
  // ComponentName.module.scss
  .root {
    justify-content: flex-start;
  }
  ```
  ```tsx
  // ComponentName.tsx
  import ComponentName from 'ComponentName.module.scss';
  ...
  <ComponentName classes={ComponentNameClasses} />
  ...
  ```

## Current Components

Note: if component does **NOT** require material-ui it should be mentioned in requirements column; else assume components require react, material-ui, classnames and lodash as mentioned above in .

| Component | Link To Code | Description | Requirments |
| --------- | ------------ | ----------- | ----------- |

> Add component here
- FIXME: this table is not getting maintained; need automated table generation for new components

## Future Components / Improvements

- to fix the issues with webpack creating packages that can add dependencies by component
- clean up storybook examples once team is more familiar with capabilities
- include Transition Props for all components to make it easy to add transitions to these components

## How to add Components

### Rules of Component Library
- avoid side effects inside component (no api calls)
- try to keep components presentational only
- components must take classes prop that is an object for styling keys
- FIXME: need to clearly define the rules

### First time contributors
- Please review the examples and other components to see the capabilities of storybook.

- Please read about SDD([storybook driven development](https://www.codementor.io/blog/storybook-style-guide-6gd991suyd))

- Open PRs as Draft till you are ready to merge
  - if you need to retrigger a chromatic run just add a reviewer
  - saves our chromatic snapshot balance

### Use Code Generator
to add a new component named PopperButton
 ```sh
 npm run add-comp PopperButton
 ```
 this uses our code-generator via template and makes all the scaffolding related to new component you added

### Environment Setup for dev
  - ideally dev should be independent of other repos and every component should be designed to be used by itself and by other components in the component lib
  - there maybe a need to test your components behaviour with other apps; in this case you can use yarn link npm_package_name

### Release Steps
  - only release from master
  - PR merge must have the target version in package.json
  - validation check in chromatic
  - validation check for size increase in any component
  - make sure the package.json is updated exactly with the target version and use exact same number in release
    - FIXME: need to add validation check in release job; to avoid issues
    - FIXME: add screen shots here for devs to follow easier

### Exact steps to follow for a new release
  - Create a new PR from your branch to master
  - Increment the version in package.json acc to semantic versioning (https://docs.npmjs.com/about-semantic-versioning)
  - Run npm install and verify changes in package-lock.json
  - After the PR is approved and all checks have passed, you can merge the PR and make sure to delete the branch
  - Go to Github releases (https://github.com/repo_name/releases) and draft a new release
  - Make sure to verify the tag version and add a short description (can use the release log template for this)
  - Add a release log to All Devs in chat rooms used (FIXME: can be automated) 

    ```## [3.0.8] - 2021-03-16

      ### Added / Changed
      - [{Component-name} component](https://github.com/link_to_pull_request)
        - This is using the Mui chip component to form a chip group that can be used for radio options
        - It is a controlled component with props - value & onChange
        - Has the option to display label & error message
        - Direction of chips can be set to display them horizontally or vertically```

### Coding Guidelines for adding Components
FIXME: need link to the coding guildlies here

## FAQ
> I am unable to add library to my repo; I dont have permissions to read private package.
FIXME: add screenshots/examples here
1. create a token via github settings
1. add token to .npmrc in the 


> I am getting a warning/error that i dont have have `classnames` / `lodash` in my repo; what should I do?
1. This library requires `classnames` and `lodash` as peer dependencies to manage merging the passed override classes with default classes.
1. please add `classnames` and `lodash` to your repo via `npm i classnames lodash`
1. Why cant I add and use a component that doesn't need these?
  - this repo requires every component to accept stlying keys passed via classes prop (atleast `root` key is required)


> I am getting a warning/error that i dont have have `@material-ui/core` in my repo; what should I do?
1. Check the component table in current components section above
1. if the component you wish to import requires material-ui then you must add material-ui version 4 to your repo via `npm i @material-ui/core@4 @material-ui/icons@4`
1. If your using material-ui@3 then you may need to confirm compatibility yourself (maybe do a release v1.x.x) 
1. If your using material-ui@5 then you may need to make all components compatible and do a MAJOR version release

My repo uses a different React version than the one in peerDependencies, what should I do?
1. check if the components you need are fully compatible with your version.
1. make changes needed and also update package.json peerDependencies and version (use semver)
1. release version and package will be built

> I am stuck trying to add a component; what should i do?
1. add issue to repo requesting for help
1. check with your manager.
1. contact Abhinav Dalal
1. please update instructions(or this FAQ) once you figured why you got stuck.
