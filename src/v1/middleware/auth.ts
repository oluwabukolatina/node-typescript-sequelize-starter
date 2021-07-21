import jwt from 'jsonwebtoken';
import { NextFunction, Response, Request } from 'express';
import ResponseHandler from '../utils/response-handler';
import { HTTP_UNAUTHORIZED } from '../utils/status-codes/http-status-codes';

function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');
  if (!token)
    return ResponseHandler.ErrorResponse(
      res,
      HTTP_UNAUTHORIZED,
      'No Token Found. Authorization Denied',
    );
  try {
    /**
     * add uder fromm the payload
     */
    req.user = jwt.verify(token, String(process.env.JWT_SECRET));
    return next();
  } catch (e) {
    return ResponseHandler.ServerErrorResponse(res);
  }
}
export default auth;
