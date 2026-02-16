import { createContext, useContext } from "react";
import type { Student } from "@/types";

// Type definition for students context
type StudentsContextType = {
  students: Student[];
  filterOption: "all" | Student["gender"];
  filteredStudents: Student[];
  filteredStudentsCount: number;
  handleFilterOptionChange: (gender: string) => void;
  handleStudentDataAddition: (newStudentData: Student) => void;
  handleStudentDataDeletion: (studentId: Student["id"]) => void;
  handleStudentDataUpdation: (newStudentData: Student) => void;
};

// Create student context
export const studentsContext = createContext<StudentsContextType | undefined>(
  undefined,
);

// Create custom hook to use the student context
export function useStudentsContext() {
  const _studentContext = useContext(studentsContext);

  if (!_studentContext) {
    throw new Error("Cannot use the students context");
  }

  return _studentContext;
}
