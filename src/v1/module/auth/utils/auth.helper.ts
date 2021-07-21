import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { JWT_SECRET, JWT_EXPIRY } from '../../../utils/secret';

export const createToken = async (id: number, email: string) => {
  return jwt.sign({ id, email }, JWT_SECRET, {
    expiresIn: JWT_EXPIRY,
  });
}

export const hashPassword = async (password: string) =>
  bcrypt.hash(password, 10);
export const comparePassword = async (password: string, hashed: string) =>
  bcrypt.compare(password, hashed);
