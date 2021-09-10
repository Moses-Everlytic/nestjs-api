import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from 'src/schemas/student.schema';
import { Teacher, TeacherDocument } from 'src/schemas/teacher.schema';
import { StudentDTO } from 'src/web/model/student.dto';

@Injectable()
export class StudentTeacherService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<StudentDocument>,

    @InjectModel(Teacher.name)
    private readonly teacherModel: Model<TeacherDocument>,
  ) {}

  async getTeacherStudents(id: string): Promise<Student[]> {
    const teacher = await this.teacherModel.findById(id).exec();

    if (teacher === null) {
      return null;
    }

    return await this.studentModel.find({ teacher: teacher.name }).exec();
  }

  async updateStudentByTeacherAndStudentId(
    teacherId: string,
    studentId: string,
    studentDTO: StudentDTO,
  ): Promise<void> {
    const teacher = await this.teacherModel.findById(teacherId).exec();

    if (teacher === null) {
      return null;
    }

    await this.studentModel.findByIdAndUpdate(studentId, studentDTO).exec();
  }
}
