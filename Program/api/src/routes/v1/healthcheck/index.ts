import { Router, Request, Response } from 'express';
import { SuccessMsgResponse, SuccessResponse, ErrorResponse } from '../../../core/ApiResponse';
import Logger from '../../../core/Logger';
import RoleRepo from '../../../database/repository/RoleRepo';

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
        // optional: add further things to check (e.g. connecting to dababase)
        const role = await RoleRepo.findByCode('22');

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