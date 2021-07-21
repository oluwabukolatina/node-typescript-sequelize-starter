import { Response } from 'express';
import HttpStatus from 'http-status-codes';

export const errorResponse = (
  res: Response,
  message: string,
  data: any,
  code: number,
) => {
  return res.status(code).json({ status: false, message, data });
};

export const successResponse = (
  res: Response,
  message: string,
  data: any,
  code: number,
) => {
  return res.status(code).json({ status: true, message, data });
};
export const serverErrorResponse = (res: Response) => {
  return res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .json({ status: false, message: 'Internal Server Error', });
};

export const notFoundResponse = (res: Response, message: string, data: any) => {
  return res
    .status(HttpStatus.NOT_FOUND)
    .json({ status: false, message, data });
};
