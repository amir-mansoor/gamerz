const notFound = (req, res, next) => {
  const error = new Error(`Not Found  - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const ErrorHandler = (err, req, res, next) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};

export { notFound, ErrorHandler };
