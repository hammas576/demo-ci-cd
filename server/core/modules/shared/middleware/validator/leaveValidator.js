import Joi from 'joi';
import { ERROR_MESSAGES } from '../../utils/constants';

const schema = Joi.object({
  leaveType: Joi.string().required().label(ERROR_MESSAGES.LEAVE_TYPE_ERROR),
  description: Joi.string().optional(),
  startDate: Joi.date().required().label(ERROR_MESSAGES.SELECTED_DATES_ERROR),
  endDate: Joi.date().optional(),
});

const validate = async (req, res, next) => {
  try {
    const { error } = await schema.validate(req.body);
    if (error) {
      if (error.details && error.details.length && error.details[0].message) {
        return res.status(400).json({ error: error.details[0].message });
      }
      return res.status(400).json({ error: error.message });
    }
    return next();
  } catch (error) {
    if (error.details && error.details.length && error.details[0].message) {
      return res.status(400).json({ error: error.details[0].message });
    }
    return res.status(400).json({ error: error.message });
  }
};

export default validate;
