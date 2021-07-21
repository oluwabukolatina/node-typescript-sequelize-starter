import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import { createUser } from '../../user/service/user.service';
import * as response from '../../../utils/response-handler';
import * as helper from '../utils/auth.helper';
import { MSG_USER_LOGGED_IN_SUCCESSFULLY } from '../message/auth.message';

export const registerUser = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;
    const hash = await helper.hashPassword(password);
    const data = { email, password: hash };
    const user = await createUser(data);
    return response.successResponse(
      res,
      MSG_USER_LOGGED_IN_SUCCESSFULLY,
      {
        email: user.email,
        id: user.id,
        createdAt: user.createdAt,
      },
      HttpStatus.CREATED,
    );
  } catch (err) {
    return response.serverErrorResponse(res);
  }
};
