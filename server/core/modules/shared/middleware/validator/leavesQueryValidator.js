/* eslint-disable object-curly-newline */
const LeavesQueryValidator = (req, res, next) => {
  try {
    const { limit, offset, status, leaveType, sort } = req.query;

    const options = {
      limit,
      offset,
      status,
      leaveType,
      sort,
    };
    req.options = options;
    return next();
  } catch (err) {
    return res.status(401).json({ msg: err.message });
  }
};

export default LeavesQueryValidator;
