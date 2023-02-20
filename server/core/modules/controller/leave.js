/* eslint-disable no-underscore-dangle */
/* eslint-disable object-curly-newline */
import LeaveService from '../service/leave/index';

export default {
  createLeave: async (req, res) => {
    try {
      const { body, user } = req;
      const response = await LeaveService.postLeave(body, user);
      return res.status(response.statusCode).json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  allLeaves: async (req, res) => {
    try {
      const { user, options } = req;
      options.refferTo = user._id;
      options.camp = user.campId;
      const response = await LeaveService.leaves(options);
      return res.status(response.statusCode).json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  getMyLeaves: async (req, res) => {
    try {
      const { user, options } = req;
      options.user = user._id;
      options.camp = user.campId;
      const response = await LeaveService.leaves(options);
      return res.status(response.statusCode).json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  leaveById: async (req, res) => {
    try {
      const { id } = req.params;
      const filter = { refferTo: req.user._id, _id: id };
      const response = await LeaveService.oneLeaveById(filter);
      return res.status(response.statusCode).json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  leaveUpdateByAdmin: async (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      const filter = { refferTo: req.user._id, _id: id, status: 'PENDING' };
      const response = await LeaveService.leaveUpdate(filter, body);
      return res.status(response.statusCode).json(response);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
