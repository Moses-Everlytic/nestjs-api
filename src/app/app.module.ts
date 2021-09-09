import { StudentModule } from './../schemas/student.module';
import { StudentService } from 'src/services/student.service';
import { StudentController as TeacherStudentController } from './../controllers/teacher/student.controller';
import { TeacherController } from './../controllers/teacher/teacher.controller';
import { StudentController } from './../controllers/students/student.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
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
