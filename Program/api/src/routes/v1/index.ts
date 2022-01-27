import * as express from 'express';
import about from './about';
import healthcheck from './healthcheck';
//import apikey from '../../auth/apikey';

const router = express.Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are public APIs protected by api-key
//router.use('/', apikey);
/*-------------------------------------------------------------------------*/

router.use('/about', about);
router.use('/healthcheck', healthcheck);

export default router;
