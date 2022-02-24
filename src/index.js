
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];
  
  if (!Array.isArray(matrix)) {
    return result;
  }

  matrix.forEach((item, i) => {
    if ((i + 1) % 2 === 0) {
      result.push(...(item.reverse()));
    } else {
      result.push(...item);
    };
  });

  return result;
}
