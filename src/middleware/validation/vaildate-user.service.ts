import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from './user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class VaildateUserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  //todo Convert to token authentication
  async getUser(username: string, password: string): Promise<UserDTO> {
    const user = await this.userModel
      .findOne(
        { username: username },
        {
          _id: 0,
          email: 1,
          password: 1,
          username: 1,
          firstname: 1,
        },
      )
      .exec();

    return user && (await bcrypt.compare(password, user.password));
  }
}
