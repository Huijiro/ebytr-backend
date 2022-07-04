import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'restify-errors';

export default class ErrorHandler {
  static handle = (
    err: HttpError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (err instanceof HttpError) {
      res.status(err.statusCode).json({
        message: err.message,
        status: err.statusCode,
      });
    } else {
      res.status(500).json({
        message: 'Internal server error',
        status: 500,
      });
    }

    next();
  };
}
