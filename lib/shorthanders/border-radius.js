module.exports = function (shorthand, declarations) {
  var propertyName = shorthand.shorthandProperty;

  if (
    declarations['border-top-left-radius'] &&
    declarations['border-top-right-radius'] &&
    declarations['border-bottom-right-radius'] &&
    declarations['border-bottom-left-radius']
  ) {
    // If all 4 margin sides are set
    if (
      declarations['border-top-left-radius'].value === declarations['border-top-right-radius'].value &&
      declarations['border-top-right-radius'].value === declarations['border-bottom-right-radius'].value &&
      declarations['border-bottom-right-radius'].value === declarations['border-bottom-left-radius'].value
    ) {
      // If the margin is equal on all sides
      // 1-value notation
      return declarations['border-top-left-radius'].value;
    } else if (
      declarations['border-top-left-radius'].value === declarations['border-bottom-right-radius'].value &&
      declarations['border-top-right-radius'].value === declarations['border-bottom-left-radius'].value
    ) {
      // If horizontal and vertical margins are equal on both sides
      // 2-value notation
      return declarations['border-top-left-radius'].value + ' ' + declarations['border-top-right-radius'].value;
    } else if (declarations['border-top-right-radius'].value === declarations['border-bottom-left-radius'].value) {
      // If only the horizontal margin is equal on both sides
      // 3-value notation
      return (
        declarations['border-top-left-radius'].value +
        ' ' +
        declarations['border-top-right-radius'].value +
        ' ' +
        declarations['border-bottom-right-radius'].value
      );
    } else {
      // If all 4 margins are different
      // 4-value notation
      return (
        declarations['border-top-left-radius'].value +
        ' ' +
        declarations['border-top-right-radius'].value +
        ' ' +
        declarations['border-bottom-right-radius'].value +
        ' ' +
        declarations['border-bottom-left-radius'].value
      );
    }
  } else {
    // Not all margin sides are defined
    return '';
  }
};
