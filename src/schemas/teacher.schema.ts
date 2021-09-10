import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeacherDocument = Teacher & Document;
@Schema({
  // timestamp: true
})
export class Teacher {
  @Prop({ required: true })
  name: string;

  @Prop()
  surname: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
