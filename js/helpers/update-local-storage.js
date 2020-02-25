export default (key, value) => {
  try {
    if (typeof key !== 'string') {
      throw new TypeError(
        `Key is expected to be of type string. Provided type: ${typeof key}`
      );
    }

    localStorage.setItem(key, JSON.stringify(value));
  } catch (ex) {
    if (ex instanceof TypeError) {
      console.error(ex.stack);
    }
  }
};
