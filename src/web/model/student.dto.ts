export class StudentDTO {
  name: string;
  teacher: string;
}

export class CreateStudentDTO extends StudentDTO {
  studentNumber: string;
}
