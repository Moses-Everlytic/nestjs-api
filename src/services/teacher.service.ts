import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Teacher, TeacherDocument } from 'src/schemas/teacher.schema';
import { TeacherDTO } from 'src/web/model/teacher.dto';
import { ITeacherService } from './teacher.interface';

@Injectable()
export class TeacherService implements ITeacherService<Teacher, TeacherDTO> {
  constructor(
    @InjectModel(Teacher.name) private readonly model: Model<TeacherDocument>,
  ) {}

  async getTeachers(): Promise<Teacher[]> {
    return await this.model.find().exec();
  }

  async getTeacherById(id: string): Promise<Teacher> {
    return await this.model.findById(id).exec();
  }

  async createTeacher(teacherDTO: TeacherDTO): Promise<Teacher> {
    return await new this.model({
      id: uuid(),
      ...teacherDTO,
      createdDate: new Date().getTime(),
    }).save();
  }

  async updateTeacher(id: string, teacherDTO: TeacherDTO): Promise<void> {
    await this.model.findByIdAndUpdate(id, teacherDTO).exec();
  }

  async deleteTeacher(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }
}
