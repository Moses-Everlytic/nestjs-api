import { StudentController as TeacherStudentController } from './../controllers/teacher/student.controller';
import { TeacherController } from './../controllers/teacher/teacher.controller';
import { StudentController } from './../controllers/students/student.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, TeacherStudentController],
  providers: [],
})
export class AppModule {}
