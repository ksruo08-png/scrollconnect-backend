import { Injectable, NotFoundException } from '@nestjs/common';

export interface Student {
  id: number;
  name: string;
  branch: string;
}

@Injectable()
export class StudentsService {
  private students: Student[] = [
    { id: 1, name: 'Aarav', branch: 'Computer Engineering' },
  ];
  private nextId = 2;

  findAll(): Student[] {
    return this.students;
  }

  findOne(id: number): Student {
    const student = this.students.find((s) => s.id === id);
    if (!student) throw new NotFoundException(`Student ${id} not found`);
    return student;
  }

  create(data: { name: string; branch: string }): Student {
    const student = { id: this.nextId++, ...data };
    this.students.push(student);
    return student;
  }
}
