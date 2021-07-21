import dotenv from 'dotenv';
import fs from 'fs';
import logger from './logger/logger';

if (fs.existsSync('.env')) {
  logger.debug('Using .env file to supply config environment variables');
  dotenv.config({ path: '.env' });
}
function throwIfUndefined<T>(secret: T | undefined, name?: string): T {
  if (!secret) {
    logger.error(`${name} must not be undefined`);
    return process.exit(1);
  }
  return secret;
}
export const ENVIRONMENT = throwIfUndefined(process.env.NODE_ENV, 'NODE_ENV');
export const DATABASE_USERNAME = throwIfUndefined(
  process.env.DATABASE_USERNAME,
  'DATABASE_USERNAME',
);
export const DATABASE_PASSWORD = throwIfUndefined(
  process.env.DATABASE_PASSWORD,
  'DATABASE_PASSWORD',
);
export const DATABASE_NAME = throwIfUndefined(
  process.env.DATABASE_NAME,
  'DATABASE_NAME',
);
export const DATABASE_HOST = throwIfUndefined(
  process.env.DATABASE_HOST,
  'DATABASE_HOST',
);
export const JWT_SECRET = throwIfUndefined(
  process.env.JWT_SECRET,
  'JWT_SECRET',
);
export const JWT_EXPIRY = throwIfUndefined(
  process.env.JWT_EXPIRY,
  'JWT_EXPIRY',
);
export const PORT = throwIfUndefined(process.env.PORT, 'PORT');
