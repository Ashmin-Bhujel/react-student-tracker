import type { Student } from "@/types";

// Hardcoded initial students data
export const initialStudentsData: Student[] = [
  {
    id: crypto.randomUUID(),
    name: "John Doe",
    dateOfBirth: new Date("Mar 5 2000"),
    imageURL:
      "https://images.unsplash.com/photo-1544179559-032b931c661e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    grade: "a",
    phoneNumber: "9801234560",
    rollNumber: 1,
    gender: "male",
  },
  {
    id: crypto.randomUUID(),
    name: "Jane Parker",
    dateOfBirth: new Date("July 02 2002"),
    imageURL:
      "https://images.unsplash.com/photo-1593575391244-2f16fcf4cbf8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    grade: "a+",
    phoneNumber: "9801234561",
    rollNumber: 2,
    gender: "female",
  },
  {
    id: crypto.randomUUID(),
    name: "April Carter",
    dateOfBirth: new Date("April 14 2001"),
    imageURL:
      "https://plus.unsplash.com/premium_photo-1661956433588-44f56874350c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    grade: "a+",
    phoneNumber: "9808012345",
    rollNumber: 3,
    gender: "female",
  },
  {
    id: crypto.randomUUID(),
    name: "Alex Smith",
    dateOfBirth: new Date("Nov 23 2001"),
    imageURL:
      "https://plus.unsplash.com/premium_photo-1665461700462-61e9b730de7f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    grade: "a+",
    phoneNumber: "9801234562",
    rollNumber: 4,
    gender: "male",
  },
];
