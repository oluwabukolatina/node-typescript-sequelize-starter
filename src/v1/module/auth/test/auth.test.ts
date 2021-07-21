import request from 'supertest';
import * as faker from 'faker';
import HttpStatus from 'http-status-codes';
import app from '../../../../app';
import { REGISTER_USER_URL } from '../auth.url';
import * as message from "../message/auth.message";

describe('auth /auth', () => {
  it('should create a user', async () => {
    const res = await request(app).post(REGISTER_USER_URL).send({
      email: faker.internet.email(),
      password: faker.random.word(),
    });
    expect(res.status).toEqual(HttpStatus.CREATED);
    expect(res.body.status).toEqual(true);
    expect(res.body.message).toEqual(message.MSG_USER_LOGGED_IN_SUCCESSFULLY);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('email');
    expect(res.body.data).toHaveProperty('id');
  });

  it('should not register a user without email', async () => {
    const res = await request(app)
      .post(`${REGISTER_USER_URL}`)
      .send({ password: 'password' });
    expect(res.body.status).toEqual(false);
    expect(res.body.message).toEqual(message.MSG_UNABLE_TO_REGISTER_USER);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('message');
    expect(res.body.data.message).toBe('Email is required');
  });

  it('should not register a user without password', async () => {
    const res = await request(app)
      .post(`${REGISTER_USER_URL}`)
      .send({ email: faker.internet.email() });
    expect(res.body.status).toEqual(false);
    expect(res.body.message).toEqual(message.MSG_UNABLE_TO_REGISTER_USER);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('message');
    expect(res.body.data.message).toBe('Password is required');
  });
});
