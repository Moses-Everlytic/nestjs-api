import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentDTO } from 'src/web/model/student.dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:id')
  getStudentById(@Param('id') id: string) {
    return 'Get Student By Id: ' + id;
  }

  @Post()
  @HttpCode(201)
  createStudent(@Body() studentDTO: StudentDTO) {
    return studentDTO;
  }

  @Put('/:id')
  updateStudent(@Param('id') id: string, @Body() studentDTO: StudentDTO) {
    return `Updated id: ${id} student: ${studentDTO}`;
  }

  @Delete('/:id')
  deleteStudent(@Param('id') id: string): void {
    console.log('deleting ' + id);
  }
}
