import moment from 'moment';

import { REGEX } from './constants';

export default {
  alphabetsOnly: (data) => {
    const checkAlphabetsOnly = new RegExp(REGEX.ALPHABETS_ONLY);
    if (!checkAlphabetsOnly.test(data)) {
      return false;
    }
    return true;
  },

  dateValidations: (start, end) => {
    const currentDate = moment().unix();
    const startDate = moment(new Date(JSON.stringify(start))).unix();
    const endDate = end ? moment(new Date(JSON.stringify(end))).unix() : null;
    if (startDate < currentDate) {
      return false;
    }
    if (endDate && endDate <= startDate) {
      return false;
    }
    return true;
  },

  duration: (startDate, endDate) => {
    const start = moment(startDate);
    const end = moment(endDate);
    return end.diff(start, 'days');
  },
};
