module.exports = {
  getError: (errors, field) => {
    // return errors.find(({ path }) => path === field).msg;
    const error = errors.find(({ path }) => path === field);
    if (error) {
      return error.msg;
    }
  },
};
