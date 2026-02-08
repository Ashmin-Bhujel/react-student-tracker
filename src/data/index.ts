import type { Student } from "@/types";

export const students: Student[] = [
  {
    id: crypto.randomUUID(),
    name: "John Doe",
    dateOfBirth: "2000-01-01",
    imageURL: "",
    grade: "a",
    phoneNumber: "0123456789",
    rollNumber: 1,
    gender: "male",
  },
  {
    id: crypto.randomUUID(),
    name: "Jane Parker",
    dateOfBirth: "2001-01-01",
    imageURL: "",
    grade: "a+",
    phoneNumber: "0123456789",
    rollNumber: 2,
    gender: "female",
  },
  {
    id: crypto.randomUUID(),
    name: "Alex Smith",
    dateOfBirth: "2000-02-04",
    imageURL: "",
    grade: "a+",
    phoneNumber: "0123456789",
    rollNumber: 3,
    gender: "other",
  },
];
