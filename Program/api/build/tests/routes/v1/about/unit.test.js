"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../../src/app"));
const mongoose_1 = __importDefault(require("mongoose"));
describe("GET /about", () => {
    const endpoint = '/v1/about';
    const request = (0, supertest_1.default)(app_1.default);
    beforeAll(async () => {
        await mongoose_1.default.disconnect();
    });
    it("should return 200 OK", async () => {
        const response = await request.get(endpoint);
        expect(response.status).toBe(200);
    });
});
//# sourceMappingURL=unit.test.js.map