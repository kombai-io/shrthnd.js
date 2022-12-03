module.exports = function (shorthand, declarations) {
  var shorthandValue = require('./generic')(shorthand, declarations);
  // If we declare bg size but not position, we can't shorthand
  if (
    declarations['border-top'] &&
    declarations['border-bottom'] &&
    declarations['border-left'] &&
    declarations['border-right']
  ) {
    console.log(
      ((declarations['border-top'].value === declarations['border-bottom'].value)
     
    );
    if (
      ((declarations['border-top'].value === declarations['border-bottom'].value) ===
        declarations['border-left'].value) ===
      declarations['border-right'].value
    ) {
      return declarations['border-top'].value;
    }
  }
  if (
    !declarations['border-width'] ||
    !declarations['border-style'] ||
    !declarations['border-color'] ||
    !declarations['border-top'] ||
    !declarations['border-bottom'] ||
    !declarations['border-left'] ||
    !declarations['border-right']
  ) {
    return '';
  }

  return shorthandValue.replace('  ', ' ').trim();
};
