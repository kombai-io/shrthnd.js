module.exports = function (shorthand, declarations) {
  var propertyName = shorthand.shorthandProperty;

  if (
    declarations[propertyName + '-width'] &&
    declarations[propertyName + '-style'] &&
    declarations[propertyName + '-color']
  ) {
    // If all 4 margin sides are set

    // If the margin is equal on all sides
    // 1-value notation
    return declarations[propertyName + '-top'].value;
  } else {
    // Not all margin sides are defined
    return '';
  }
};
