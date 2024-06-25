const logger = (req, res, next) => {
  console.log(`${req.method} ${req.hostname}:/${req.originalUrl}`);
  next();
};

export default logger;
