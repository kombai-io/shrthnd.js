module.exports = function (shorthand, declarations) {
  function checkGlobalEquality(a, b, c, d) {
    return a === b && b === c && c === d;
  }
  var shorthandValue = require('./generic')(shorthand, declarations);
  // If we declare bg size but not position, we can't shorthand
  if (
    declarations['border-top'] &&
    declarations['border-bottom'] &&
    declarations['border-left'] &&
    declarations['border-right']
  ) {
    if (
      checkGlobalEquality(
        declarations['border-top'].value,
        declarations['border-bottom'].value,
        declarations['border-left'].value,
        declarations['border-right'].value,
      )
    ) {
      //will delete in engine as this is a singleton set
      return declarations['border-top'].value;
    }
  }
  if (!declarations['border-width'] || !declarations['border-style'] || !declarations['border-color']) {
    return '';
  }

  return shorthandValue.replace('  ', ' ').trim();
};
