module.exports = require('./lib/engine');

var shorthands = require('./lib/properties');

var declarations = [
  {
    'border-top-width': {
      property: 'border-top-width',
      value: '0.00',
    },
    'border-right-width': {
      property: 'border-right-width',
      value: '0.00',
    },
    'border-left-width': {
      property: 'border-left-width',
      value: '0.00',
    },
    'border-bottom-width': {
      property: 'border-bottom-width',
      value: '1px',
    },
    'border-color': {
      property: 'border-color',
      value: '#e9ecef',
    },
    'border-style': {
      property: 'border-style',
      value: 'solid',
    },
    overflow: {
      property: 'overflow',
      value: 'hidden',
    },
    display: {
      property: 'display',
      value: 'flex',
    },
    'justify-content': {
      property: 'justify-content',
      value: 'flex-start',
    },
    'align-items': {
      property: 'align-items',
      value: 'stretch',
    },
    'flex-direction': {
      property: 'flex-direction',
      value: 'row',
    },
    width: {
      property: 'width',
      value: '530px',
    },
    height: {
      property: 'height',
      value: '70px',
    },
    'box-sizing': {
      property: 'box-sizing',
      value: 'border-box',
    },
    'margin-top': {
      property: 'margin-top',
      value: '25.5px',
    },
    'flex-grow': {
      property: 'flex-grow',
      value: 0,
    },
    'flex-shrink': {
      property: 'flex-shrink',
      value: 0,
    },
    'flex-basis': {
      property: 'flex-basis',
      value: 'auto',
    },
  },
];

shorthands.forEach(function (shorthand) {
  var shorthandValue = shorthand.getShorthandValue(shorthand, declarations); // Defined in properties.js

  if (shorthandValue !== '') {
    // If there are no the specific properties of the shorthand, "getShorthandValue" returns an empty string
    var newDeclarations = [];

    // Add the new shorthanded property
    newDeclarations.push({
      type: 'declaration',
      property: shorthand.shorthandProperty,
      value: shorthandValue,
    });

    // Add properties having nothing to do with the property being shorthanded
    declarations.forEach(function (declaration) {
      if (shorthand.properties.indexOf(declaration.property) <= -1) {
        newDeclarations.push(declaration);
      } else {
        longPropertiesPositions.push(declaration.position);
      }
    });

    // Replace the rule's old declarations with the new shorthanded ones
    declarations = newDeclarations;
  }
});

console.log(declarations);
