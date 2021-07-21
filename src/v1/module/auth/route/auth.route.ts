import { Application } from 'express';
import { AUTH_URL } from '../../../utils/urls';
import { registerUser } from '../controller/auth.controller';
import { validateRegister } from '../validation/auth.validation';

class AuthRoutes {
  public routes = (app: Application) => {
    app.route(`${AUTH_URL}/register`).post(validateRegister, registerUser);
  };
}
export default AuthRoutes;
