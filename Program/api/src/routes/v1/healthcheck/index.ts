import { Router } from 'express';
import { SuccessResponse } from '../../../core/ApiResponse';
import { Logger } from '../../../core/Logger';
import mongoose from 'mongoose';

const router = Router();

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
        healthcheck.databaseOK = (mongoose.connection.readyState === 1);

    } catch (e) {
        let msgError: string = (e as Error).message
        healthcheck.message = msgError;
        healthcheck.databaseOK = false;

        Logger.error(e);
    }

    new SuccessResponse(healthcheck.message , {
        healthcheck: healthcheck,
    }).send(res);

});

export default router;