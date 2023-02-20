/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import {
  ERROR_MESSAGES,
  RESPONSE_MESSAGES,
} from '../../shared/utils/constants';
import LeaveRepo from '../../repo/leave';
import ERROR from '../../shared/utils/errors';
import utils from '../../shared/utils/utils';
import mail from '../../shared/middleware/email';

async function postLeave(data, user) {
  let filter = {
    userId: user._id,
    campId: user.campId,
    populate: 'reportsTo',
  };
  const userAffiliation =
    await LeaveRepo.getOneUserDepartmentAffiliationWithPopulate(filter);
  if (userAffiliation.response) {
    if (!userAffiliation.response.reportsTo) {
      filter = {
        campId: user.campId,
        position: 'Team_lead',
        departmentId: userAffiliation.response.departmentId,
        populate: 'userId',
      };
      const teamLead =
        await LeaveRepo.getOneUserDepartmentAffiliationWithPopulate(filter);
      if (!teamLead.response) {
        return ERROR.conflict(ERROR_MESSAGES.TEAM_LEAD_NOT_EXIST);
      }
      if (!utils.alphabetsOnly(data.description)) {
        return ERROR.badRequest(ERROR_MESSAGES.IVALID_LEAVE_DESC);
      }
      // const start = data.startDate;
      // const end = data.endDate ? data.endDate : null;
      // // if (!utils.dateValidations(start, end)) {
      // //   return ERROR.conflict(ERROR_MESSAGES.DATE_CONFLICTS);
      // // }
      const leaveData = {
        leaveType: data.leaveType,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate ? data.endDate : null,
        duration: data.endDate
          ? utils.duration(data.startDate, data.endDate)
          : 1,
        user: user._id,
        refferTo: teamLead.response.userId._id,
        camp: user.campId,
      };
      const leave = await LeaveRepo.createLeave(leaveData);
      if (leave.error) {
        return ERROR.badRequest(leave.error);
      }
      // SEND EMAIL TO REFFERD USER
      // "abc@gmail.com" has requested for a "Type of leave"
      const mailData = {
        msg: 'Leave Request',
        html: `${user.email} has requested for a ${leaveData.leaveType}`,
      };
      await mail(teamLead.response.userId.email, mailData);
      return {
        statusCode: 201,
        success: true,
        message: RESPONSE_MESSAGES.LEAVE_SUBMITED,
      };
    }
    if (!utils.alphabetsOnly(data.description)) {
      return ERROR.badRequest(ERROR_MESSAGES.IVALID_LEAVE_DESC);
    }
    // const start = data.startDate;
    // const end = data.endDate ? data.endDate : null;
    // if (!utils.dateValidations(start, end)) {
    //   return ERROR.conflict(ERROR_MESSAGES.DATE_CONFLICTS);
    // }
    const leaveData = {
      leaveType: data.leaveType,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate ? data.endDate : null,
      duration: data.endDate ? utils.duration(data.startDate, data.endDate) : 1,
      user: user._id,
      refferTo: userAffiliation.response.reportsTo._id,
      camp: user.campId,
    };
    const leave = await LeaveRepo.createLeave(leaveData);
    if (leave.error) {
      return ERROR.badRequest(leave.error);
    }
    const mailData = {
      msg: 'Leave Request',
      html: `${user.email} has requested for a ${leaveData.leaveType}`,
    };
    await mail(userAffiliation.response.reportsTo.email, mailData);
    return {
      statusCode: 201,
      success: true,
      message: RESPONSE_MESSAGES.LEAVE_SUBMITED,
    };
  }
  return ERROR.conflict(ERROR_MESSAGES.SERVER_ERROR);
}

async function leaves(filter) {
  let response = {};
  let messageRes;
  const leaveResponse = await LeaveRepo.getAllLeaves(filter);
  if (leaveResponse.response.page) {
    response = leaveResponse.response;
    messageRes =
      response.length > 0
        ? RESPONSE_MESSAGES.RECORDS_FOUND
        : ERROR_MESSAGES.RECORD_NOT_FOUND;
  } else {
    response.docs = leaveResponse.response;
    messageRes =
      response.docs.length > 0
        ? RESPONSE_MESSAGES.RECORDS_FOUND
        : ERROR_MESSAGES.RECORD_NOT_FOUND;
  }
  return {
    statusCode: 200,
    success: true,
    response,
    message: messageRes,
  };
}

async function oneLeaveById(filter) {
  const { response, error } = await LeaveRepo.getOneLeave(filter);
  if (error) {
    return ERROR.conflict(ERROR_MESSAGES.INVALID_ID);
  }
  if (!response) {
    return ERROR.conflict(ERROR_MESSAGES.RECORD_NOT_FOUND);
  }
  const leave = {
    request_title: response.leaveType,
    status: response.status,
    apply_date: response.startDate,
    sent_by: response.user.email,
  };

  return {
    statusCode: 200,
    success: true,
    leave,
  };
}

async function leaveUpdate(filter, body) {
  const { response, error } = await LeaveRepo.getOneLeave(filter);
  if (error) {
    return ERROR.conflict(ERROR_MESSAGES.INVALID_ID);
  }
  if (!response) {
    return ERROR.conflict(ERROR_MESSAGES.RECORD_NOT_FOUND);
  }
  const leave = await LeaveRepo.updateLeave({ _id: response._id }, body);
  if (!leave.response) {
    return ERROR.conflict(leave.error);
  }
  const resMessage =
    body.status === 'APPROVED'
      ? RESPONSE_MESSAGES.LEAVE_APPROVED
      : RESPONSE_MESSAGES.LEAVE_REJECTED;

  return {
    statusCode: 200,
    success: true,
    message: resMessage,
  };
}

export default {
  postLeave,
  leaves,
  oneLeaveById,
  leaveUpdate,
};
