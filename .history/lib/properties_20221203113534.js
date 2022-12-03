// This array defines all the shorthand properties and their details
module.exports = [
  {
    shorthandProperty: 'margin',
    properties: ['margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
    shorthandSyntax: 'margin-top margin-right margin-bottom margin-left',
    getShorthandValue: require('./shorthanders/margin-padding'),
  },
  {
    shorthandProperty: 'padding',
    properties: ['padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
    shorthandSyntax: 'padding-top padding-right padding-bottom padding-left',
    getShorthandValue: require('./shorthanders/margin-padding'),
  },
  {
    shorthandProperty: 'background',
    properties: [
      'background-color',
      'background-image',
      'background-repeat',
      'background-position',
      'background-attachment',
      'background-origin',
      'background-clip',
      'background-size',
    ],
    shorthandSyntax:
      'background-color background-image background-repeat background-attachment background-position{{bg-position-size-slash}}background-size background-origin background-clip',
    getShorthandValue: require('./shorthanders/background'),
  },
  {
    shorthandProperty: 'font',
    properties: ['font-style', 'font-variant', 'font-weight', 'font-size', 'line-height', 'font-family'],
    shorthandSyntax: 'font-style font-variant font-weight font-size/line-height font-family',
    getShorthandValue: require('./shorthanders/font'),
  },
  {
    shorthandProperty: 'border-top',
    properties: ['border-top-width', 'border-top-style', 'border-top-color'],
    shorthandSyntax: 'border-top-width border-top-style border-top-color',
    getShorthandValue: require('./shorthanders/border-top'),
  },
  {
    shorthandProperty: 'border-bottom',
    properties: ['border-bottom-width', 'border-bottom-style', 'border-bottom-color'],
    shorthandSyntax: 'border-bottom-width border-bottom-style border-bottom-color',
    getShorthandValue: require('./shorthanders/border-top'),
  },
  {
    shorthandProperty: 'border-left',
    properties: ['border-left-width', 'border-left-style', 'border-left-color'],
    shorthandSyntax: 'border-left-width border-left-style border-left-color',
    getShorthandValue: require('./shorthanders/border-top'),
  },
  {
    shorthandProperty: 'border-right',
    properties: ['border-right-width', 'border-right-style', 'border-right-color'],
    shorthandSyntax: 'border-right-width border-right-style border-right-color',
    getShorthandValue: require('./shorthanders/border-top'),
  },
  {
    shorthandProperty: 'border',
    properties: ['border-width', 'border-style', 'border-color'],
    shorthandSyntax: 'border-width border-style border-color',
    getShorthandValue: require('./shorthanders/border'),
  },
  {
    shorthandProperty: 'flex',
    properties: ['flex-grow', 'flex-shrink', 'flex-basis'],
    shorthandSyntax: 'flex-grow flex-shrink flex-basis',
    getShorthandValue: require('./shorthanders/flex'),
  },
  {
    shorthandProperty: 'outline',
    properties: ['outline-width', 'outline-style', 'outline-color'],
    shorthandSyntax: 'outline-width outline-style outline-color',
    getShorthandValue: require('./shorthanders/generic'),
  },
  {
    shorthandProperty: 'list-style',
    properties: ['list-style-type', 'list-style-position', 'list-style-image'],
    shorthandSyntax: 'list-style-type list-style-position list-style-image',
    getShorthandValue: require('./shorthanders/generic'),
  },
];
