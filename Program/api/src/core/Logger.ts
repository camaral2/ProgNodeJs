import { createLogger, transports, format, level } from 'winston';
import fs from 'fs';
import path from 'path';
import DailyRotateFile from 'winston-daily-rotate-file';
import { environment, logDirectory } from '../config';
import { json } from 'body-parser';

let dir = logDirectory;
if (!dir) dir = path.resolve('logs');

// create directory if it is not present
if (!fs.existsSync(dir)) {
  // Create the directory if it does not exist
  fs.mkdirSync(dir);
}

const logLevel = environment === 'development' ? 'debug' : 'warn';
const filename = dir + '/%DATE%.log';

//console.log('logLevel:', logLevel);
//console.log('Dir:', dir);
//console.log('Filename:', filename);


const options = {
  file: {
    level: logLevel,
    filename: filename,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    timestamp: true,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    prettyPrint: true,
    json: true,
    maxSize: '20m',
    colorize: true,
    maxFiles: '14d',
    format: format.combine(
      format.timestamp(),
      format.json())
    },
};

let date = new Date().toISOString();
const logFormat = format.printf(function(info) {
  return `${date}-${info.level}: ${JSON.stringify(info.message, null, 4)}`;
});

export default createLogger({
  transports: [
    new transports.Console({
      level: level,
      format: format.combine(format.colorize(), logFormat)
    }),
    new DailyRotateFile(options.file),
    //new transports.Http({ host: 'localhost', port:8080 })
  ],
  exitOnError: false // do not exit on handled exceptions
});
