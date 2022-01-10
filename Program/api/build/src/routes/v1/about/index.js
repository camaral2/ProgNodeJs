"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ApiResponse_1 = require("../../../core/ApiResponse");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    let msg = process.env.npm_package_name + ' - ' + process.env.npm_package_version;
    new ApiResponse_1.SuccessMsgResponse(msg).send(res);
});
exports.default = router;
//# sourceMappingURL=index.js.map