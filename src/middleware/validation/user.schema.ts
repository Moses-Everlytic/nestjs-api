import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema({
  // timestamp: true
})
export class User {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
