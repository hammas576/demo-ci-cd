import { REGEX, ERROR_MESSAGES } from '../../utils/constants';

const validateQuery = (req, res, next) => {
  const checkAllNumerics = new RegExp(REGEX.ALL_NUMERICS);
  if (!checkAllNumerics.test(req.query.limit)) {
    return res.status(400).json({ error: ERROR_MESSAGES.INVALID_LIMIT });
  }
  if (!checkAllNumerics.test(req.query.offset)) {
    return res.status(400).json({ error: ERROR_MESSAGES.INVALID_OFFSET });
  }
  return next();
};

export default validateQuery;
