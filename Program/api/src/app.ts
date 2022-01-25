import express, { Request, Response, NextFunction } from 'express';
import * as bodyParser from "body-parser";
import cors from 'cors';
import { corsUrl, environment } from './config';
import { ApiError, InternalError, NotFoundError } from './core/ApiError';
import routesV1 from './routes/v1';
import { Logger } from './core/Logger';


import './database'; // initialize database

import swaggerUi from 'swagger-ui-express'
import { swaggerDocument } from './swagger';

process.on('uncaughtException', (e) => {
  Logger.error(e);
});

// Create a new express application instance
let app = express();

app.disable("x-powered-by");

// support application/json type post data
app.use(bodyParser.json({ limit: '10mb' }));

//support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors({ origin: corsUrl, optionsSuccessStatus: 200 }));

// Routes
app.get('/', (req: Request, res: Response) => {
  let msg = process.env.npm_package_name + ' - ' + process.env.npm_package_version;
  res.send(msg);
});


app.use('/v1', routesV1);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// catch 404 and forward to error handler
app.use((req, res, next) => next(new NotFoundError()));

// Middleware Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

  Logger.error(err);

  if (err instanceof ApiError) {
    return ApiError.handle(err, res);
  } else {
    if (environment === 'development' || environment === 'test') {
      Logger.error(err);
      return res.status(500).send(err.message);
    }

    return ApiError.handle(new InternalError(), res);
  }
});

export default app;