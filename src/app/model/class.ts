import { Students } from "./students";

export interface Class {
    name: string;
    teacher: string;
    maxNoOfStudents: number;
    students: Students[];
}
