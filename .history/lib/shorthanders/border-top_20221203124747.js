module.exports = function (shorthand, declarations) {
  var propertyName = shorthand.shorthandProperty;

  var res = '';

  if (declarations[propertyName + '-style']) {
    if (declarations[propertyName + '-width'] && declarations[propertyName + '-color']) {
      // If all 3 border-`direction` present
      return (
        declarations[propertyName + '-width'].value +
        ' ' +
        declarations[propertyName + '-style'].value +
        ' ' +
        declarations[propertyName + '-color'].value
      );
    } else if (declarations[propertyName + '-width']) {
      if (declarations['border-color']) {
        return (
          declarations[propertyName + '-width'].value +
          ' ' +
          declarations[propertyName + '-style'].value +
          ' ' +
          declarations['border-color'].value
        );
      } else {
        return declarations[propertyName + '-width'].value + ' ' + declarations[propertyName + '-style'].value;
      }
    } else if (declarations[propertyName + '-color']) {
      if (declarations['border-width']) {
        return (
          declarations['border-width'].value +
          ' ' +
          declarations[propertyName + '-style'].value +
          ' ' +
          declarations[propertyName + '-color'].value
        );
      } else {
        return declarations[propertyName + '-style'].value + ' ' + declarations[propertyName + '-color'].value;
      }
    } else {
      if (declarations['border-width'] && declarations['border-color']) {
        return (
          declarations['border-width'].value +
          ' ' +
          declarations[propertyName + '-style'].value +
          ' ' +
          declarations['border-color'].value
        );
      } else if (declarations['border-width']) {
        return declarations['border-width'].value + ' ' + declarations[propertyName + '-style'].value;
      } else if (declarations['border-color']) {
        return declarations[propertyName + '-style'].value + ' ' + declarations['border-color'].value;
      } else {
        return declarations[propertyName + '-style'].value;
      }
    }
  } else if (declarations['border-style']) {
    if (declarations[propertyName + '-width'] && declarations[propertyName + '-color']) {
      // If all 3 border-`direction` present
      return (
        declarations[propertyName + '-width'].value +
        ' ' +
        declarations['border-style'].value +
        ' ' +
        declarations[propertyName + '-color'].value
      );
    } else if (declarations[propertyName + '-width']) {
      if (declarations['border-color']) {
        return (
          declarations[propertyName + '-width'].value +
          ' ' +
          declarations['border-style'].value +
          ' ' +
          declarations['border-color'].value
        );
      } else {
        return declarations[propertyName + '-width'].value + ' ' + declarations['border-style'].value;
      }
    } else if (declarations[propertyName + '-color']) {
      if (declarations['border-width']) {
        return (
          declarations['border-width'].value +
          ' ' +
          declarations['border-style'].value +
          ' ' +
          declarations[propertyName + '-color'].value
        );
      } else {
        return declarations['border-style'].value + ' ' + declarations[propertyName + '-color'].value;
      }
    } else {
      if (declarations['border-width'] && declarations['border-color']) {
        return (
          declarations['border-width'].value +
          ' ' +
          declarations['border-style'].value +
          ' ' +
          declarations['border-color'].value
        );
      } else if (declarations['border-width']) {
        return declarations['border-width'].value + ' ' + declarations['border-style'].value;
      } else if (declarations['border-color']) {
        return declarations['border-style'].value + ' ' + declarations['border-color'].value;
      } else {
        return declarations['border-style'].value;
      }
    }
  } else {
    // Border-`direction` style not present
    return '';
  }

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
};
