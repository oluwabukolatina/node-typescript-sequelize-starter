import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { baseValidationForBody } from '../../../validation/app.validation';

export const validateRegister = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const schema = Joi.object({
    email: Joi.string().email().label('Email').required(),
    password: Joi.string().label('Password').required(),
  });
  await baseValidationForBody(schema, req, res, next, 'Unable to Register');
};
