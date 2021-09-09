import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentDTO, StudentDTO } from 'src/web/model/student.dto';

@Controller('teachers/:id/students')
export class StudentController {
  @Get()
  getStudents(@Param('id') id: string): FindStudentDTO[] {
    return null;
  }

  @Put(':studentId')
  updateStudentById(@Param() params, @Body() studentDTO: StudentDTO): void {
    console.log('updated');
  }
}
