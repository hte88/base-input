export const shakeMyForm = () => {
  document.getElementById('form-login').classList.add('shake');
  setTimeout(() => {
    document.getElementById('form-login').classList.remove('shake');
  }, 500);
};

export const arrayToObject = (array, keyField) => {
  return array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});
};

export const clearCheckLoop = (array) => {
  const clearCheckLoop = [...new Set(array)];
  return clearCheckLoop.length === 1 && [clearCheckLoop] ? true : false;
};
