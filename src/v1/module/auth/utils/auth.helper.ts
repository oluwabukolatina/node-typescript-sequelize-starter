import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const createToken = async (id: number, email: string) =>
  jwt.sign({ id, email }, String(process.env.JWT_SECRET), {
    expiresIn: 720000,
  });
export const hashPassword = async (password: string) =>
  bcrypt.hash(password, 10);
export const comparePassword = async (password: string, hashed: string) =>
  bcrypt.compare(password, hashed);
