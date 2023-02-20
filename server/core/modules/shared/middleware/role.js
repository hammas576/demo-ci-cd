import { USER_ROLE, ERROR_MESSAGES } from '../utils/constants';

const Admin = (req, res, next) => {
  const { role } = req.user;
  if (role === USER_ROLE.ADMIN) {
    return next();
  }
  return res.status(401).json({
    error: ERROR_MESSAGES.UNAUTHORIZED,
  });
};

export default { Admin };
