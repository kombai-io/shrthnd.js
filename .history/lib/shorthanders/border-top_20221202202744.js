module.exports = function (shorthand, declarations) {
  var propertyName = shorthand.shorthandProperty;
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
    } else if (!declarations[propertyName + '-width'] && !declarations[propertyName + '-color']) {
    }
  } else {
    // Border-`direction` style not present
    return '';
  }
};
