module.exports = function (bs, bdw, bdc, bw, bc) {
  function concat(a, b, c) {
    return c ? a + ' ' + b + ' ' + c : a + ' ' + b;
  }

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
};
