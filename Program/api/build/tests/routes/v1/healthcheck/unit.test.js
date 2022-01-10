"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../../../../src/app"));
const Logger_1 = __importDefault(require("../../../../src/core/Logger"));
describe("GET /healthcheck", () => {
    const endpoint = '/v1/healthcheck';
    const request = (0, supertest_1.default)(app_1.default);
    afterAll(() => {
        Logger_1.default.info('Status DB:', mongoose_1.default.STATES);
    });
    it("should return 200 OK", async () => {
        const res = await request.get(endpoint);
        expect(res.status).toBe(200);
        expect(res.body.data.healthcheck.uptime).toBeGreaterThan(0);
    });
});
jest.setTimeout(60000); //one minute
describe("GET /healthcheck with error", () => {
    beforeAll(async () => {
        await mongoose_1.default.disconnect();
    });
    afterAll(() => {
        Logger_1.default.info('Status DB:', mongoose_1.default.STATES);
    });
    const endpoint = '/v1/healthcheck';
    const request = (0, supertest_1.default)(app_1.default);
    it("should return 500 Error", async () => {
        const response = await request.get(endpoint);
        expect(response.status).toBe(500);
    });
});
//# sourceMappingURL=unit.test.js.map