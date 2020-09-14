import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import routes from './routes';
import uploadConfig from './config/upload';

import './database';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

// error handling
app.use(
  (error: Error, request: Request, response: Response, _: NextFunction) => {
    // if the error is an instace of AppError (that is, it is a know error) it will return the error description as the service whishes
    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ status: 'error', message: error.message });
    }

    // otherwise, it will return a generic error with 500 Internal Server Error status and display a console.log with the error
    console.log(error);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log('🚀 Server running on port 3333...');
});
