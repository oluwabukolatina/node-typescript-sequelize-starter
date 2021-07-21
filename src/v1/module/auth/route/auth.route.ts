import { Application } from 'express';
import { registerUser } from '../controller/auth.controller';
import { validateRegister } from '../validation/auth.validation';
import { REGISTER_USER_URL } from '../auth.url';

class AuthRoutes {
  public routes = (app: Application) => {
    app.route(`${REGISTER_USER_URL}`).post(validateRegister, registerUser);
  };
}
export default AuthRoutes;
