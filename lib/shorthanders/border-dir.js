module.exports = function (shorthand, declarations) {
  var propertyName = shorthand.shorthandProperty;

  function concatBorder(a, b, c) {
    if (a && b && c) return a.value + ' ' + b.value + ' ' + c.value;
    if (a && b) return a.value + ' ' + b.value;
    if (a && c) return a.value + ' ' + c.value;
    if (b && c) return b.value + ' ' + c.value;
    if (a) return a.value;
    if (b) return b.value;
    if (c) return c.value;
  }

  if (
    !declarations[propertyName + '-width'] &&
    !declarations[propertyName + '-style'] &&
    !declarations[propertyName + '-color']
  )
    return '';

  if (declarations[propertyName + '-width'] && parseFloat(declarations[propertyName + '-width'].value) === 0)
    return 'delete';

  if (!declarations[propertyName + '-style']) return '';
  //if width = 0

  return concatBorder(
    declarations[propertyName + '-width'],
    declarations[propertyName + '-style'],
    declarations[propertyName + '-color'],
  );
};
