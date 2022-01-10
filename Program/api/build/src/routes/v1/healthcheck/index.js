"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ApiResponse_1 = require("../../../core/ApiResponse");
const Logger_1 = __importDefault(require("../../../core/Logger"));
const RoleRepo_1 = __importDefault(require("../../../database/repository/RoleRepo"));
const router = (0, express_1.Router)();
/*-------------------------------------------------------------------------*/
// Below all APIs are private APIs protected for Access Token
//router.use('/', authentication);
/*-------------------------------------------------------------------------*/
router.get('/', async (_req, res, _next) => {
    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: new Date(new Date().toUTCString()),
        databaseOK: true
    };
    try {
        // optional: add further things to check (e.g. connecting to dababase)
        const role = await RoleRepo_1.default.findByCode('22');
    }
    catch (e) {
        let msgError = e.message;
        healthcheck.message = msgError;
        healthcheck.databaseOK = false;
        Logger_1.default.error(e);
    }
    new ApiResponse_1.SuccessResponse(healthcheck.message, {
        healthcheck: healthcheck,
    }).send(res);
});
exports.default = router;
//# sourceMappingURL=index.js.map