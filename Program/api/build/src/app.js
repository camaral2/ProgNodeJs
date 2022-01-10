"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
//import cors from 'cors';
//import { corsUrl, environment } from './config';
const ApiError_1 = require("./core/ApiError");
const v1_1 = __importDefault(require("./routes/v1"));
require("./database"); // initialize database
//const swaggerUi = require('swagger-ui-express');
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./swagger");
//process.on('uncaughtException', (e) => {
//  Logger.error(e);
//});
// Create a new express application instance
const app = (0, express_1.default)();
// support application/json type post data
app.use(bodyParser.json({ limit: '10mb' }));
//support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
//app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));
// Routes
app.use('/v1', v1_1.default);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerDocument));
// catch 404 and forward to error handler
app.use((req, res, next) => next(new ApiError_1.NotFoundError()));
// Middleware Error Handler
/*
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

  Logger.error(err);

  if (err instanceof ApiError) {
    ApiError.handle(err, res);
  } else {
    if (environment === 'development' || environment === 'test') {
      Logger.error(err);
      return res.status(500).send(err.message);
    }
    ApiError.handle(new InternalError(), res);
  }
});
*/
exports.default = app;
//# sourceMappingURL=app.js.map