import UserModel from '../../../../../database/models/user.model';

export const createUser = async (params: {
  email: string;
  password: string;
}) => {
  try {
    return await UserModel.create(params);
  } catch (e) {
    return e;
  }
};
