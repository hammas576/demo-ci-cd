/* eslint-disable no-restricted-syntax */

import { USER_ROLE, ERROR_MESSAGES } from '../utils/constants';

const privileges = (code, group) => (req, res, next) => {
  if (req.user.role === USER_ROLE.ADMIN) {
    return next();
  }
  if (!req.user.permissions.length) {
    return res.status(401).json({ error: ERROR_MESSAGES.UNAUTHORIZED });
  }
  const permissions = req.user.permissions.slice();
  for (const item of permissions) {
    if (item.title === code && item.group === group) {
      return next();
    }
  }
  return res.status(401).json({ error: ERROR_MESSAGES.UNAUTHORIZED });
};

export default { privileges };
