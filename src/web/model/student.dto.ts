export class StudentDTO {
  name: string;
  teacher: string;
}

export class CreateStudentDTO extends StudentDTO {
  studentNumber: string;
}

export class FindStudentDTO {
  id: string;
  name: string;
  teacher: string;
  studentNumber: string;
}
