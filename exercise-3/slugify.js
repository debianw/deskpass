//
//
const slugifyEmail = (str = '') => {
  return str
    .toLowerCase()
    .trim()
    .replace(/@/g, '-at-')
    .replace(/\./g, '-dot-')
    .replace(/[^\w\-]+/g, '');
};

//
module.exports = {
  slugifyEmail,
};