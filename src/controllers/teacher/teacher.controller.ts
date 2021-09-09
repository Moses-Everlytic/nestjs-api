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
import { FindTeacherDTO, TeacherDTO } from 'src/web/model/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherDTO[] {
    return null;
  }

  @Get('/:id')
  getTeacherById(@Param('id') id: string): FindTeacherDTO {
    return null;
  }

  @Post()
  @HttpCode(201)
  createTeacher(@Body() teachertDTO: TeacherDTO): TeacherDTO {
    return teachertDTO;
  }

  @Put('/:id')
  updateTeacher(@Param('id') id: string, @Body() teacherDTO: TeacherDTO): void {
    console.log(`Updated id: ${id} teacher: ${teacherDTO}`);
  }

  @Delete('/:id')
  deleteTeacher(@Param('id') id: string): void {
    console.log('deleting ' + id);
  }
}
