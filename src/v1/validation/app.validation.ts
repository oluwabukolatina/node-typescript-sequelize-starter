import HttpStatus from 'http-status-codes';
import { Schema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { errorResponse } from '../utils/response-handlers/response-handler';

export const baseValidationForBody = async (
  schema: Schema,
  req: Request,
  res: Response,
  next: NextFunction,
  message: string,
) => {
  try {
    req.body = await schema.validateAsync(req.body);
    next();
  } catch (error) {
    errorResponse(
      res,
      message,
      {
        message: error.message.replace(/["]/gi, ''),
      },
      HttpStatus.BAD_REQUEST,
    );
  }
};
