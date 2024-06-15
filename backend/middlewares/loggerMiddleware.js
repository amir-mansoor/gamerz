const logger = (req, res, next) => {
  console.log(`Api ${req.hostname}:/${req.originalUrl}`);
  next();
};

export default logger;
