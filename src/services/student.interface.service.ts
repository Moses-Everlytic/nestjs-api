import { StudentDTO } from 'src/web/model/student.dto';

export interface IStudentService<T> {
  getStudents(): Promise<T[]>;
  getStudentById(id: string): Promise<T>;
  createStudent(t: StudentDTO): Promise<T>;
  updateStudent(id: string, t: StudentDTO): Promise<void>;
  deleteStudent(id: string): Promise<void>;
}
