/* eslint-disable no-useless-escape */
export const USER_ROLE = {
  ADMIN: 'Admin',
  USER: 'User',
};

export const LEAVE_STATUS = {
  APPROVED: 'Approved',
  PENDING: 'Pending',
  REJECTED: 'Rejected',
};

export const ROLE_CODE_DESCRIPTION = {
  CREATE: 'User shall be able to create operation',
  READ: 'User shall be able to view only',
  DELETE: 'User shall be able to delete operation',
  UPDATE: 'User shall be able to update operation',
};

export const ROLE_CODE = {
  CREATE: 'Create',
  READ: 'Read',
  DELETE: 'Delete',
  UPDATE: 'Update',
};

export const ROLE_CODE_SLUG = {
  CREATE: 'create',
  READ: 'read',
  DELETE: 'delete',
  UPDATE: 'update',
};

export const SERVICES = {
  USER_MANAGEMENT: 'USER_MANAGEMENT',
  DATA_LAYER: 'DATA_LAYER_MANAGEMENT',
};

export const PERMISSION_GROUPS = {
  USER_MANAGEMENT_USER: 'USER_MANAGEMENT_USER',
  USER_MANAGEMENT_DEPARTMENT: 'USER_MANAGEMENT_DEPARTMENT',
  USER_MANAGEMENT_CAMP: 'USER_MANAGEMENT_CAMP',
  USER_MANAGEMENT_ROLE: 'USER_MANAGEMENT_ROLE',
  USER_MANAGEMENT_ROLE_TYPE: 'USER_MANAGEMENT_ROLE_TYPE',
  USER_MANAGEMENT_ROLE_CODE: 'USER_MANAGEMENT_ROLE_CODE',
};

export const JWT_ERROR = {
  TOKEN_EXPIRED: 'TokenExpiredError',
  JSON_WEB_TOKEN: 'JsonWebTokenError',
};

export const REGEX = {
  ALPHA_NUMERIC: /^[d]*[a-z][a-z\d]*$/i,
  SPECIAL_CHARACTERS: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
  ALPHA_NUMERIC_SPECIAL_CHARACTER:
    /^[d]*[a-z][a-z\d\s`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]*$/i,
  ALL_NUMERICS: /^[0-9]*$/,
  MIN_MAX_LENGTH: /^.{4,22}$/,
  ALPHABETS_ONLY: /^[A-Za-z\s]*$/,
  SPACES: /\s/,
  NUMERICS: /\d/,
  UPPERCASE_LETTER: /[A-Z]/,
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  URLS: /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/,
  SEARCH:
    /^[d]*[a-z][a-z\d\s]*$|^[a-zA-Z0-9]*@([\w-]+\.)+[\w-]{2,4}$|^[a-zA-Z0-9]*@$|^[a-zA-Z0-9]*@([\w-]+\.)$/,
};

export const RESPONSE_MESSAGES = {
  LEAVE_REJECTED: 'Leave rejected successfully',
  LEAVE_APPROVED: 'Leave approved successfully',
  API_RUNNING: 'Api is running',
  LEAVE_SUBMITED: 'Leave submited successfully',
  RECORD_UPDATED: 'Updated successfully',
  RECORD_DELETED: 'Deleted successfully',
  INVITATION_SENT: 'Invitation sent successfully',
  TOKEN_FETCHED: 'Token fetched successfully',
  USER_CREATED: 'User created successfully',
  USER_ADDED: 'User added successfully',
  USERS_ADDED: 'Users added successfully',
  CAMP_CREATED: 'Camp created successfully',
  DEPARTMENT_CREATED: 'Department created successfully',
  ROLE_CODE_CREATED: 'Role code created successfully',
  ROLE_TYPE_CREATED: 'Role type created successfully',
  DEPARTMENT_DELETED: 'Department deleted successfully',
  USER_FETCHED: 'User fetched successfully',
  CAMP_FETCHED: 'Camp fetched successfully',
  DEPARTMENT_FETCHED: 'Department fetched successfully',
  DEPARTMENT_UPDATED: 'Department updated successfully',
  EMAIL_SENT: 'Email sent successfully',
  RECORDS_FOUND: 'Records fetched successfully',
  USER_DELETED: 'User deleted successfully',
  PROFILE_UPDATE: 'Profile updated successfully',
  PASSWORD_UPDATE: 'Password updated successfully',
  ROLE_UPDATE: 'Role updated successfully',
  STATUS_UPDATE: 'Status updated successfully',
  LOGIN_SUCCESSFUL: 'Login successful',
  USER_REMOVED: 'User removed successfully',
  USER_VERIFIED: 'User verified successfully',
  OTP_SENT: 'OTP sent successfully',
  RESET_PASSOWRD: 'Password updated successfully',
  FORGOT_PASSWORD:
    'An OTP code has been sent to your email address. Please verify the code in the following text-field',
};

export const ERROR_MESSAGES = {
  TOKEN_EXPIRED: 'Token has expired.',
  BEARER_TOKEN_REQUIRED: 'Bearer Token is required.',
  DATE_CONFLICTS: 'You cannot seclect past dates',
  SELECTED_DATE_LIMIT_ERROR: 'Invalid selected dates',
  LEAVE_TYPE_ERROR: 'Please select type of leave',
  SELECTED_DATES_ERROR: 'Please select date',
  INVALID_LIMIT: 'Invalid limit',
  INVALID_OFFSET: 'Invalid offset',
  PATH_ERROR: 'Path not found',
  ROLE_TYPE_EXISTS: 'Role type already exists',
  ROLE_VERIFIED: 'Role already verified',
  DUPLICATE_EMAILS: 'Duplicate emails entered',
  DELETE_YOURSELF: 'Cannot delete yourself',
  TEAM_LEAD_PRESENT:
    'Team Lead is already present in the desired department please change role to team member',
  REPORT_DISABLED_USER: 'Cannot report to a disabled user ',
  ROLE_CODE_EXISTS: 'Role code already exists',
  PASSWORD_COMPARE: 'Old and new password cannot be the same',
  INVALID_PASSWORD: 'Invalid old password',
  DELETE_DEFAULT_DEPARTMENT: 'Cannot delete default department ',
  DELETE_DEPARTMENT: 'Cannot delete department as it contains users ',
  INVALID_USER_ID: 'Invalid user Id',
  SERVER_ERROR: 'An error occurred',
  INVALID_CAMP_ID: 'Invalid camp Id',
  INVALID_VERIFICATION_ID: 'Invalid verification Id',
  VERIFICATION_EXPIRED: 'Verification expired',
  INVITATION_ACCEPTED: 'Invitation already accepted',
  INVALID_ID: 'Invalid Id',
  INVITE_USERS: 'Cannot invite more than 5 users at a time',
  INVALID_OTP: 'Invalid OTP',
  INVALID_EMAIL: 'Invalid email entered',
  INVALID_DATA: 'Invalid data',
  NO_VERIFICATION_RECORD: 'No verification record found',
  OTP_EXPIRED: 'OTP expired',
  INVITATION_EXPIRED: 'Invitation expired',
  INVALID_CREDENTIALS: 'Invalid credentials',
  INVALID_DEPARTMENT_ID: 'Invalid department Id',
  DEFAULT_DEPARTMENT: 'Cannot not fetch default department',
  UPDATE_DEFAULT_DEPARTMENT: 'Default department is ready only',
  DEPARTMENT_REPORTS_TO: 'Department cannot report to itself',
  INVALID_INVITATION_ID: 'Invalid invitation Id',
  RECORD_NOT_FOUND: 'Record not found',
  UNAUTHORIZED: 'Unauthorized',
  ADMIN_ROLE_CHANGE: 'Cannot change the role of an Admin',
  ADMIN_STATUS_CHANGE: 'Cannot change the status of an Admin',
  EMAIL_ALREADY_EXIST: 'The email is already registered with another user',
  DEPARTMENT_ALREADY_EXIST: 'Department with the entered name already exists',
  ACCOUNT_DISABLED:
    'The account has been disabled please contact the admin for further instructions',
  ACCOUNT_NOT_VERIFIED:
    'Account not verified yet, an email has been sent for verification',
  ROLE_NOT_VERIFIED:
    'Your status in this camp is currently unapproved please contact the admin for further verification',
};
