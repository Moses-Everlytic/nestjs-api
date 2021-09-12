import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Response,
} from '@nestjs/common';
import { StudentService } from 'src/services/student.service';
import { StudentDTO } from 'src/web/model/student.dto';
import * as bcrypt from 'bcrypt';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getStudents() {
    return await this.studentService.getStudents();
  }

  @Get('/:id')
  async getStudentById(@Param('id') id: string, @Response() res) {
    const student = await this.studentService.getStudentById(id);

    console.log(student);

    if (student === null) {
      return res.status(404).send('Resource Not Found');
    }

    return res.json(student).end();
  }

  @Post()
  @HttpCode(201)
  async createStudent(@Body() studentDTO: StudentDTO) {
    return await this.studentService.createStudent(studentDTO);
  }

  @Put('/:id')
  async updateStudent(@Param('id') id: string, @Body() studentDTO: StudentDTO) {
    await this.studentService.updateStudent(id, studentDTO);
  }

  @Delete('/:id')
  async deleteStudent(@Param('id') id: string) {
    await this.studentService.deleteStudent(id);
  }
}
