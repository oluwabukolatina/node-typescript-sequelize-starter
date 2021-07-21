import app from '../app';
import sequelize from '../../database/utils/database';
import { PORT } from '../v1/utils/secret';
import logger from '../v1/utils/logger/logger';
/**
 * App Variables
 */
if (!PORT) {
  process.exit(1);
}
const APP_PORT: number = parseInt(PORT as string, 10) || 3000;
app.listen(APP_PORT, () => {
  sequelize
    .authenticate()
    .then(() => {
      logger.info('Connection has been established successfully.');
    })
    .catch(() => {
      logger.error('Unable to connect to the database:');
    });
});
