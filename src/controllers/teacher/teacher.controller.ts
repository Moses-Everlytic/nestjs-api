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
import { TeacherService } from 'src/services/teacher.service';
import { TeacherDTO } from 'src/web/model/teacher.dto';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  async getTeachers() {
    return await this.teacherService.getTeachers();
  }

  @Get('/:id')
  async getTeacherById(@Param('id') id: string) {
    return await this.teacherService.getTeacherById(id);
  }

  @Post()
  @HttpCode(201)
  async createTeacher(@Body() teachertDTO: TeacherDTO) {
    return await this.teacherService.createTeacher(teachertDTO);
  }

  @Put('/:id')
  async updateTeacher(@Param('id') id: string, @Body() teacherDTO: TeacherDTO) {
    await this.teacherService.updateTeacher(id, teacherDTO);
  }

  @Delete('/:id')
  async deleteTeacher(@Param('id') id: string) {
    await this.teacherService.deleteTeacher(id);
  }
}
