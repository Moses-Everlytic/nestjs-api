import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { VaildateUserService } from './vaildate-user.service';

@Module({
  providers: [VaildateUserService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [VaildateUserService],
})
export class UserModule {}
