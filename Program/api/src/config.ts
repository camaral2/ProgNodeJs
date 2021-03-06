// Mapper for environment variables
export const environment = process.env.NODE_ENV;
export const port = process.env.PORT || 4000;
export const urlMongoDb = String(process.env.MONGODB_URL || '');

export const corsUrl = process.env.CORS_URL;

//export const tokenInfo = {
//  accessTokenValidityDays: parseInt(process.env.ACCESS_TOKEN_VALIDITY_SEC || '0'),
//  refreshTokenValidityDays: parseInt(process.env.REFRESH_TOKEN_VALIDITY_SEC || '0'),
//  issuer: process.env.TOKEN_ISSUER || '',
//  audience: process.env.TOKEN_AUDIENCE || '',
//};

export const logDirectory = process.env.LOG_DIR;
