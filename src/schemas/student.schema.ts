import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;
@Schema({
  // timestamp: true
})
export class Student {
  @Prop({ required: true })
  name: string;

  @Prop()
  teacher: string;

  @Prop({ required: true })
  studentNumber: string;

  @Prop({ required: true })
  createdDate: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
