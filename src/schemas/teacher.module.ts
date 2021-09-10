/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherController } from 'src/controllers/teacher/teacher.controller';
import { TeacherService } from 'src/services/teacher.service';
import { Teacher, TeacherSchema } from './teacher.schema';

@Module({
  controllers: [TeacherController],
  providers: [TeacherService],
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
  ],
  exports: [TeacherService],
})
export class TeacherModule {}
