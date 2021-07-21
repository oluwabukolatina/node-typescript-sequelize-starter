import app from '../app';
import sequelize from '../../database/utils/database';
/**
 * App Variables
 */
if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
app.listen(PORT, () => {
  sequelize
    .authenticate()
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('Connection has been established successfully.');
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log('Unable to connect to the database:');
    });
});
