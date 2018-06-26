//
const addSpaceToCamelCase = (str = '') => {
  if (typeof str !== 'string') throw new Error('Not a string');

  return str
    .split("")
    .reduce((prev, next) => {
      if (prev.length === 0) {
        prev.push(next.toUpperCase());
        return prev;
      }

      if (/[A-Z]/.test(next)) {
        prev.push(' ');
        prev.push(next.toUpperCase())
        return prev;
      }

      prev.push(next);
      return prev;
    }, [])
    .join("");
};

//
module.exports = {
  addSpaceToCamelCase,
};

