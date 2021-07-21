import { Response } from 'express';
import HttpStatus from 'http-status-codes';

export const errorResponse = (
  res: Response,
  message: string,
  data: any,
  code: number,
) => {
  return res.status(code).json({ message, status: false, data });
};

export const successResponse = (
  res: Response,
  message: string,
  data: any,
  code: number,
) => {
  return res.status(code).json({ message, status: true, data });
};
export const serverErrorResponse = (res: Response) => {
  return res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .json({ message: 'Internal Server Error', status: false });
};

export const notFoundResponse = (res: Response, message: string, data: any) => {
  return res
    .status(HttpStatus.NOT_FOUND)
    .json({ message, status: false, data });
};
