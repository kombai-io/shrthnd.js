module.exports = function (shorthand, declarations) {
  var propertyName = shorthand.shorthandProperty;
  if (declarations[propertyName + '-width']) {
    if (
      declarations[propertyName + '-width'] &&
      declarations[propertyName + '-style'] &&
      declarations[propertyName + '-color']
    ) {
      // If all 3 border-`direction` present
      return (
        declarations[propertyName + '-width'].value +
        ' ' +
        declarations[propertyName + '-style'].value +
        ' ' +
        declarations[propertyName + '-color'].value
      );
    } else if (!declarations[propertyName + '-style'] && !declarations[propertyName + '-color']) {
      if (declarations['border-style'] && declarations[propertyName + 'border-color']) {
      } else {
      }
    }
  } else {
    // Border-`direction` width not present
    return '';
  }
};
