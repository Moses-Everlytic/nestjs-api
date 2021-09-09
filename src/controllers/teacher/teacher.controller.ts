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
import { TeacherDTO } from 'src/web/model/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All teachers';
  }

  @Get('/:id')
  getTeacherById(@Param('id') id: string) {
    return 'Get Teacher By Id: ' + id;
  }

  @Post()
  @HttpCode(201)
  createTeacher(@Body() teachertDTO: TeacherDTO) {
    return teachertDTO;
  }

  @Put('/:id')
  updateTeacher(@Param('id') id: string, @Body() teachertDTO: TeacherDTO) {
    return `Updated id: ${id} teacher: ${teachertDTO}`;
  }

  @Delete('/:id')
  deleteTeacher(@Param('id') id: string): void {
    console.log('deleting ' + id);
  }
}
