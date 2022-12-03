module.exports = function (shorthand, declarations) {
  var propertyName = shorthand.shorthandProperty;

  function concat(a, b, c) {
    return c ? a + ' ' + b + ' ' + c : a + ' ' + b;
  }

  if (parseInt(declarations[propertyName + '-width'].value) === 0) return 'delete';

  var borderStyle = declarations['border-style'];
  var borderWidth = declarations['border-width'];
  var borderColor = declarations['border-color'];

  var borderDirStyle = declarations[propertyName + '-style'];
  var borderDirWidth = declarations[propertyName + '-width'];
  var borderDirColor = declarations[propertyName + '-color'];

  function checks(bs, bdw, bdc, bw, bc) {
    if (bdw && bdc) {
      // If all 3 border-`direction` present
      return concat(bdw.value, bs.value, bdc.value);
    } else if (bdw) {
      if (bc) {
        // If border-`direction`-color not present but border-color present
        return concat(bdw.value, bs.value, bc.value);
      } else {
        // If border-`direction`-color and border-color not present
        return concat(bdw.value, bs.value);
      }
    } else if (bdc) {
      if (bw) {
        // If border-`direction`-width not present but border-width present
        return concat(bw.value, bs.value, bdc.value);
      } else {
        // If border-`direction`-width and border-width not present
        return concat(bs.value, bdc.value);
      }
    } else {
      // If border-`direction`-width and border-`direction`-color  not present
      if (bw && bc) {
        // border-width and border-color present
        return concat(bw.value, bs.value, bc.value);
      } else if (bw) {
        // only border-width present
        return concat(bw.value, bs.value);
      } else if (bc) {
        // only border-color present
        return concat(bs.value, bc.value);
      } else {
        // only border-style present
        return bs.value;
      }
    }
  }

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
