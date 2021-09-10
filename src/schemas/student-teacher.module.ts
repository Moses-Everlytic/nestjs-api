import { StudentTeacherService } from './../services/student-teacher.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from 'src/controllers/teacher/student.controller';
import { Student, StudentSchema } from './student.schema';
import { Teacher, TeacherSchema } from './teacher.schema';

@Module({
  controllers: [StudentController],
  providers: [StudentTeacherService],
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  exports: [StudentTeacherService],
})
export class StudentTeacherModule {}
