import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from 'src/schemas/student.schema';
import { CreateStudentDTO, StudentDTO } from 'src/web/model/student.dto';
import { uuid } from 'uuidv4';
import { IStudentService } from './student.interface';

@Injectable()
export class StudentService implements IStudentService<Student> {
  constructor(
    @InjectModel(Student.name) private readonly model: Model<StudentDocument>,
  ) {}
  async getStudents(): Promise<Student[]> {
    return await this.model.find().exec();
  }

  async getStudentById(id: string): Promise<Student> {
    return await this.model.findById(id).exec();
  }

  async createStudent(studentDTO: StudentDTO): Promise<Student> {
    const newStudent: CreateStudentDTO = {
      ...studentDTO,
      studentNumber: uuid().toString(),
    };

    return await new this.model({
      ...newStudent,
      createdDate: new Date().getTime(),
    }).save();
  }

  async updateStudent(id: string, studentDTO: StudentDTO): Promise<void> {
    await this.model.findByIdAndUpdate(id, studentDTO).exec();
  }
  async deleteStudent(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
}
