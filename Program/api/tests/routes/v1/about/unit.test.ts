import supertest from 'supertest';
import app from '../../../../src/app';
import mongoose from 'mongoose';

describe('GET /about', () => {
  const endpoint = '/v1/about';
  const request = supertest(app);

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should return 200 OK', async () => {
    const response = await request.get(endpoint);
    expect(response.status).toBe(200);
  });
});
