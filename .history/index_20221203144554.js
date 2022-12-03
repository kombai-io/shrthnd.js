module.exports = require('./lib/engine');

var shorthands = require('./lib/properties');

var declarations = {
  'border-top-width': {
    property: 'border-top-width',
    value: '1px',
  },
  'border-right-width': {
    property: 'border-right-width',
    value: '1px',
  },
  'border-left-width': {
    property: 'border-left-width',
    value: '1px',
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
};

let result = {
  'border-top-width': '1px',
  'border-right-width': '1px',
  'border-left-width': '1px',
  'border-bottom-width': '1px',
  'border-color': '#e9ecef',
  'border-style': 'solid',
  overflow: 'hidden',
  display: 'flex',
  'justify-content': 'flex-start',
  'align-items': 'stretch',
  'flex-direction': 'row',
  width: '530px',
  height: '70px',
  'box-sizing': 'border-box',
  'margin-top': '25.5px',
  'flex-grow': 0,
  'flex-shrink': 0,
  'flex-basis': 'auto',
};

shorthands.forEach(function (shorthand) {
  const shorthandValue = shorthand.getShorthandValue(shorthand, declarations);
  if (shorthandValue !== '') {
    result = Object.entries(result).reduce(
      (transformedObject, [property, value]) => {
        if (!shorthand.properties.includes(property)) {
          transformedObject[property] = value;
        }
        return transformedObject;
      },
      { [shorthand.shorthandProperty]: shorthandValue },
    );
  }
  declarations = Object.entries(declarations).reduce(
    (transformedObject, [k]) => {
      if (!shorthand.properties.includes(k)) {
        transformedObject[k] = declarations[k];
      }
      return transformedObject;
    },
    { [shorthand.shorthandProperty]: { property: shorthand.shorthandProperty, value: shorthandValue } },
  );
});

console.log(result);
