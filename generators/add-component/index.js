'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _camelCase = require('lodash/camelCase');
const _capitalize = require('lodash/capitalize');

const getRecommendedName = (componentName) => (componentName && typeof componentName === 'string' ? _capitalize(_camelCase(componentName)) : '');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument('componentName', { type: String, required: false });
  }

  async getNameValidationError(componentName) {
    // must be a string
    if (!componentName || typeof componentName !== 'string' || !Number.isNaN(Number(componentName))) {
      return 'Component Name Must be a string';
    }
    // must have no spaces
    if (/\s/.test(componentName)) {
      return 'Component Name cannot have white space';
    }
    // must have UpperCamelCase
    if (!/^[A-Z][A-Za-z]*$/.test(componentName)) {
      return 'Component Name must be Upper Camel Case';
    }
    // must not already exist
    if (this.fs.exists(`src/components/${componentName}/index.tsx`)) {
      return 'Component Name must not already exist';
    }
    return true;
  }

  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red('react-comp-lib-template')} add component generator!`),
    );
    const prompts = [];
    const error = await this.getNameValidationError(this.options.componentName);
    if (typeof error === 'string') {
      prompts.push(
        {
          type: 'input',
          name: 'componentName',
          message: 'What is the new components name?',
          validate: (name) => this.getNameValidationError(name),
          default: getRecommendedName(this.options.componentName),
        },
      );
    }
    const props = await this.prompt(prompts);
    this.props = Object.keys(props).length ? props : this.options;
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('TemplateComponent'),
      this.destinationPath(`src/components/${this.props.componentName}`),
      { name: this.props.componentName, user: this.user.git.name() },
    );
  }
};
