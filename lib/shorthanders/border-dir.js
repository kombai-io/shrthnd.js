module.exports = function (shorthand, declarations) {
  var propertyName = shorthand.shorthandProperty;
  var checks = require('../helpers/border-dir');

  //if width = 0
  if (parseInt(declarations[propertyName + '-width'].value) === 0) return 'delete';

  var borderStyle = declarations['border-style'];
  var borderWidth = declarations['border-width'];
  var borderColor = declarations['border-color'];

  var borderDirStyle = declarations[propertyName + '-style'];
  var borderDirWidth = declarations[propertyName + '-width'];
  var borderDirColor = declarations[propertyName + '-color'];

  if (borderDirStyle) {
    //border-style is a mandatory field for border to be visible. So this check ensures that border-`direction`-style is present
    return checks(borderDirStyle, borderDirWidth, borderDirColor, borderWidth, borderColor);
  } else if (borderStyle) {
    //border-style is a mandatory field for border to be visible. So this check ensures that border-style is present
    return checks(borderStyle, borderDirWidth, borderDirColor, borderWidth, borderColor);
  } else {
    // Border-`direction` style not present
    return '';
  }
};
