import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './../middleware/validation/user.module';
import { StudentTeacherModule } from './../schemas/student-teacher.module';
import { StudentModule } from './../schemas/student.module';
import { TeacherModule } from './../schemas/teacher.module';

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
  controllers: [],
  providers: [],
})
export class AppModule {}
