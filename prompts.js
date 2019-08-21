const localeList = require('./lang.js')
const componentList = require('./components.js')

module.exports = [
  {
    type: 'list',
    name: 'lang',
    message: 'Choose the locale you want to load',
    choices: localeList.map(locale => ({
      name: locale,
      value: locale
    })),
    default: 'zh-CN'
  },
  {
    type: 'list',
    name: 'import',
    message: 'How do you want to import Element?',
    choices: [
      { name: 'Fully import', value: 'full' },
      { name: 'Import on demand', value: 'partial' }
    ],
    default: 'full',
  },
  {
    when: answers => answers.import === 'partial',
    type: 'checkbox',
    name: 'components',
    message: 'Choose the components you want to load',
    choices: componentList.map(component => ({
      name: component,
      value: component,
      checked: true
    }))
  },
  {
    when: answers => answers.import === 'full',
    type: 'confirm',
    name: 'customTheme',
    message: 'Do you wish to overwrite Element\'s SCSS variables?',
    default: false,
  },
  {
    when: answers => answers.customTheme === true,
    name: 'themeColor',
    type: 'color',
    message: 'Theme color',
    description: 'This is used to change the system UI color around the app',
    default: '#0073e8'
  }
]
