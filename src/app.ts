import morgan from 'morgan';
import * as dotenv from 'dotenv';
import express from 'express';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import AuthRoutes from './v1/module/auth/route/auth.route';

dotenv.config();

class App {
  public app: express.Application;

  public authRoutes: AuthRoutes = new AuthRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.authRoutes.routes(this.app);
    this.app.get('/', (req, res) => res.send(''));
  }

  private config = (): void => {
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(
      expressWinston.errorLogger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.json(),
        ),
      }),
    );
  };
}

export default new App().app;
