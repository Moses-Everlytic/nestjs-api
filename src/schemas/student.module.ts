import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from 'src/controllers/students/student.controller';
import { StudentService } from 'src/services/student.service';
import { Student, StudentSchema } from './student.schema';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  exports: [StudentService],
})
export class StudentModule {}
