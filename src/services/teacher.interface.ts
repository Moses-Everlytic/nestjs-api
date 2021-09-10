export interface ITeacherService<T, TDTO> {
  getTeachers(): Promise<T[]>;
  getTeacherById(id: string): Promise<T>;
  createTeacher(tDTO: TDTO): Promise<T>;
  updateTeacher(id: string, tDTO: TDTO): Promise<void>;
  deleteTeacher(id: string): Promise<void>;
}
