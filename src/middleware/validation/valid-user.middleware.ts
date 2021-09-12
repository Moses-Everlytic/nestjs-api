import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { VaildateUserService } from './vaildate-user.service';

@Injectable()
export class ValidUserMiddleware implements NestMiddleware {
  constructor(private readonly validateUserService: VaildateUserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const isValidUser = await this.validateUserService.getUser(
      req.header('username'),
      req.header('password'),
    );

    if (isValidUser) {
      // console.log(user);
      next();
    } else {
      throw new HttpException('Invalid Autherization', 400);
    }
  }
}
