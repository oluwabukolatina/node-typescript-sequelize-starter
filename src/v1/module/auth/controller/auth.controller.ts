import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { createUser } from '../../user/service/user.service';
import * as response from '../../../utils/response-handler';
import * as helper from '../utils/auth.helper';

export const registerUser = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;
    const hash = await helper.hashPassword(password);
    const data = { email, password: hash };
    const user = await createUser(data);
    const token = helper.createToken(user.id, user.email);
    return response.successResponse(
      res,
      'UserModel Created',
      {
        user: {
          email: user.email,
          id: user.id,
          createdAt: user.createdAt,
        },
        token,
      },
      HttpStatus.OK,
    );
  } catch (err) {
    return response.serverErrorResponse(res);
  }
};
