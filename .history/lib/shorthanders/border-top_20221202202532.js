module.exports = function (shorthand, declarations) {
  var propertyName = shorthand.shorthandProperty;
  if (declarations[propertyName + '-style']) {
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
      if (declarations['border-style']) {
        if (declarations['border-color']) {
          return (
            declarations[propertyName + '-width'].value +
            ' ' +
            declarations['border-style'].value +
            ' ' +
            declarations['border-color'].value
          );
        }
      } else {
      }
    }
  } else {
    // Border-`direction` width not present
    return '';
  }
};
