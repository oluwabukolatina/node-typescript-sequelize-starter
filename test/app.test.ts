import request from 'supertest';
import app from '../src/app';

describe('home test', () => {
  it('should return appropiate message', (done) => {
    request(app)
      .get('/')
      .then((res) => {
        expect(res.text).toEqual('');
        done();
      });
  });
});
