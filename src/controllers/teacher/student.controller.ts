import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { StudentDTO } from 'src/web/model/student.dto';

@Controller('teachers/:id/students')
export class StudentController {
  @Get()
  getStudents(@Param('id') id: string) {
    return 'Get All Students for Teacher By Teacher Id: ' + id;
  }

  @Put(':studentId')
  updateStudentById(@Param() params, @Body() studentDTO: StudentDTO) {
    return `teacher id: ${params.id}, student id ${params.studentId}, student: ${studentDTO}`;
  }
}
