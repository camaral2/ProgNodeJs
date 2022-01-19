import supertest from 'supertest';
import mongoose, { mongo } from 'mongoose';

import app from '../../../../src/app';

jest.setTimeout(60000); //one minute

describe("GET /healthcheck", () => {
  const endpoint = '/v1/healthcheck';  
  const request = supertest(app);

  afterAll(() => {
    console.info('Status DB:', mongoose.ConnectionStates)

  });

  it("should return 200 OK", async () => {
      const res = await request.get(endpoint);
      expect(res.status).toBe(200);
      expect(res.body.data.healthcheck.uptime).toBeGreaterThan(0);
    });
});

/*
jest.setTimeout(60000); //one minute


describe("GET /healthcheck with error", () => {
  
  beforeAll(async () => {
    await mongoose.disconnect();
  });

  afterAll(() => {
    console.info('Status DB:', mongoose.STATES)

  });

  const endpoint = '/v1/healthcheck';
  const request = supertest(app);

    it("should return 500 Error", async () => {
      const response = await request.get(endpoint);
      expect(response.status).toBe(500);
    });
});

*/
