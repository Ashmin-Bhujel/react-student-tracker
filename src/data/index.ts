import type { Student } from "@/types";

export const students: Student[] = [
  {
    id: crypto.randomUUID(),
    name: "John Doe",
    imageURL: "",
    grade: "a",
    phoneNumber: "0123456789",
    rollNumber: 1,
    gender: "male",
  },
  {
    id: crypto.randomUUID(),
    name: "Jane Parker",
    imageURL: "",
    grade: "a+",
    phoneNumber: "0123456789",
    rollNumber: 2,
    gender: "female",
  },
  {
    id: crypto.randomUUID(),
    name: "Alex Smith",
    imageURL: "",
    grade: "a+",
    phoneNumber: "0123456789",
    rollNumber: 3,
    gender: "other",
  },
];
