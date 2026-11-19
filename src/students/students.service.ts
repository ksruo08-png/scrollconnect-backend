import { Injectable, NotFoundException } from '@nestjs/common';

export interface Student {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class StudentsService {
  private students: Student[] = [];
  private nextId = 1;

  findAll(): Student[] {
    return this.students;
  }

  findOne(id: number): Student {
    const student = this.students.find((s) => s.id === id);
    if (!student) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    return student;
  }

  create(name: string, email: string): Student {
    const student = { id: this.nextId++, name, email };
    this.students.push(student);
    return student;
  }
    update(id: number, name: string, email: string): Student {
    const student = this.findOne(id);
    student.name = name;
    student.email = email;
    return student;
  }

  remove(id: number): { message: string } {
    const student = this.findOne(id);
    this.students = this.students.filter((s) => s.id !== student.id);
    return { message: `Student with id ${id} deleted` };
  }
}