import type { Student } from "@/types";

export const students: Student[] = [
  {
    id: crypto.randomUUID(),
    name: "John Doe",
    dateOfBirth: new Date(),
    imageURL:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    grade: "a",
    phoneNumber: "9801234560",
    rollNumber: 1,
    gender: "male",
  },
  {
    id: crypto.randomUUID(),
    name: "Jane Parker",
    dateOfBirth: new Date(),
    imageURL:
      "https://plus.unsplash.com/premium_photo-1661768742069-4de270a8d9fa?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    grade: "a+",
    phoneNumber: "9801234561",
    rollNumber: 2,
    gender: "female",
  },
  {
    id: crypto.randomUUID(),
    name: "Alex Smith",
    dateOfBirth: new Date(),
    imageURL:
      "https://images.unsplash.com/photo-1572708608967-104e751113e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    grade: "a+",
    phoneNumber: "9801234562",
    rollNumber: 3,
    gender: "other",
  },
];
