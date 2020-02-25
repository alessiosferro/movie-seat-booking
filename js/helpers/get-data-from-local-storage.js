export default key => {
  try {
    if (typeof key !== 'string') {
      throw new Error(
        'The provided key must be of type string. Provided key type: ',
        typeof key
      );
    }

    return JSON.parse(localStorage.getItem(key));
  } catch (ex) {
    if (ex instanceof TypeError) {
      console.error(ex.trace);
    }
  }
};
