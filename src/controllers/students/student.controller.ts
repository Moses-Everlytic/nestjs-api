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
import { FindStudentDTO, StudentDTO } from 'src/web/model/student.dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentDTO[] {
    return null;
  }

  @Get('/:id')
  getStudentById(@Param('id') id: string): FindStudentDTO {
    return null;
  }

  @Post()
  @HttpCode(201)
  createStudent(@Body() studentDTO: StudentDTO): StudentDTO {
    return studentDTO;
  }

  @Put('/:id')
  updateStudent(@Param('id') id: string, @Body() studentDTO: StudentDTO): void {
    console.log(`Updated id: ${id} student: ${studentDTO}`);
  }

  @Delete('/:id')
  deleteStudent(@Param('id') id: string): void {
    console.log('deleting ' + id);
  }
}
