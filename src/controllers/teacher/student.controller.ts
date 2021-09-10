import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { StudentTeacherService } from 'src/services/student-teacher.service';
import { StudentDTO } from 'src/web/model/student.dto';

@Controller('teachers/:id/students')
export class StudentController {
  constructor(private readonly studentTeacherService: StudentTeacherService) {}

  @Get()
  async getStudents(@Param('id') id: string) {
    return await this.studentTeacherService.getTeacherStudents(id);
  }

  @Put(':studentId')
  async updateStudentById(@Param() params, @Body() studentDTO: StudentDTO) {
    await this.studentTeacherService.updateStudentByTeacherAndStudentId(
      params.id,
      params.studentId,
      studentDTO,
    );
  }
}
