module.exports = function (shorthand, declarations) {
  var propertyName = shorthand.shorthandProperty;

  function concatBorder(a, b, c) {
    return a && c
      ? a.value + ' ' + b.value + ' ' + c.value
      : a
      ? a.value + ' ' + b.value
      : c
      ? b.value + ' ' + c.value
      : b.value;
  }

  if (!declarations[propertyName + '-style']) return 'delete';
  //if width = 0
  if (parseInt(declarations[propertyName + '-width']?.value) === 0) return 'delete';
  return concatBorder(
    declarations[propertyName + '-width'],
    declarations[propertyName + '-style'],
    declarations[propertyName + '-color'],
  );
};
