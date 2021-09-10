import { StudentTeacherModule } from './../schemas/student-teacher.module';
import { TeacherModule } from './../schemas/teacher.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './../controllers/students/student.controller';
import { StudentController as TeacherStudentController } from './../controllers/teacher/student.controller';
import { TeacherController } from './../controllers/teacher/teacher.controller';
import { StudentModule } from './../schemas/student.module';

@Module({
  imports: [
    StudentTeacherModule,
    TeacherModule,
    StudentModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [StudentController, TeacherController, TeacherStudentController],
  providers: [],
})
export class AppModule {}
