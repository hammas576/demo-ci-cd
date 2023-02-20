import bcrypt from 'bcryptjs';

const generatePasswordHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export default generatePasswordHash;
