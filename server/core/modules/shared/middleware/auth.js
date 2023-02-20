import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { ERROR_MESSAGES, JWT_ERROR } from '../utils/constants';
// import redisClient from '../../../../config/redis.config';

config();

const auth = async (req, res, next) => {
  const { headers } = req;
  const accessToken = headers.authorization
    ? headers.authorization.split(' ')[1]
    : '';
  if (!accessToken) {
    return res.status(400).json({ msg: ERROR_MESSAGES.BEARER_TOKEN_REQUIRED });
  }
  try {
    // const inDenyList = await redisClient.get(`bl_${accessToken}`);
    // if (inDenyList) {
    //   return res.status(401).json({
    //     message: 'JWT Rejected',
    //   });
    // }

    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    return next();
  } catch (err) {
    if (err.name === JWT_ERROR.TOKEN_EXPIRED) {
      return res.status(401).json({ msg: ERROR_MESSAGES.TOKEN_EXPIRED });
    }
    if (err.name === JWT_ERROR.JSON_WEB_TOKEN) {
      return res.status(401).json({ msg: err.message });
    }

    return res.status(401).json({ msg: err.message });
  }
};

export default auth;
