import jwt from 'jsonwebtoken';
import { NextFunction, Response, Request } from 'express';
import HttpStatus from 'http-status-codes';
import { JWT_SECRET } from '../utils/secret';
import * as response from '../utils/response-handler';

function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');
  if (!token)
    return response.errorResponse(
      res,
      'No Token Found. Authorization Denied',
      null,
      HttpStatus.UNAUTHORIZED,
    );
  try {
    /**
     * add user fromm the payload
     */
    req.user = jwt.verify(token, JWT_SECRET);
    return next();
  } catch (e) {
    return response.serverErrorResponse(res);
  }
}
export default auth;
