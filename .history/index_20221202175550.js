module.exports = require('./lib/engine');

var shorthands = require('./properties');

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
    rule.declarations.forEach(function (declaration) {
      if (shorthand.properties.indexOf(declaration.property) <= -1) {
        newDeclarations.push(declaration);
      } else {
        longPropertiesPositions.push(declaration.position);
      }
    });

    // Replace the rule's old declarations with the new shorthanded ones
    rule.declarations = newDeclarations;
  }
});
