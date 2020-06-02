module.exports = (req, res, next) => {
    console.log(`Properties:', method: ${req.method}, path: ${req.path}, date ${req.requestTime}`);
    next();
  };