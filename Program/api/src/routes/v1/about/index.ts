import { Router, Request, Response } from 'express';

import { SuccessMsgResponse } from '../../../core/ApiResponse';
const router = Router();

router.get('/', (req: Request, res: Response) => {
  const msg =
    process.env.npm_package_name + ' - ' + process.env.npm_package_version;

  new SuccessMsgResponse(msg).send(res);
});

export default router;
