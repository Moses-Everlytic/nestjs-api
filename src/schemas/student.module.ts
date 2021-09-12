import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from 'src/controllers/students/student.controller';
import { UserModule } from 'src/middleware/validation/user.module';
import { ValidUserMiddleware } from 'src/middleware/validation/valid-user.middleware';
import { StudentService } from 'src/services/student.service';
import { Student, StudentSchema } from './student.schema';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    UserModule,
  ],
  exports: [StudentService],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidUserMiddleware).forRoutes(StudentController);
  }
}
