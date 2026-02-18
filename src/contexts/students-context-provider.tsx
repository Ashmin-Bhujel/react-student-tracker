import { useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { initialStudentsData } from "@/data";
import type { Student } from "@/types";
import { toast } from "sonner";

import { studentsContext } from "./students-context";

// Type definition for students context provider props
type StudentsContextProviderProps = {
  children: ReactNode;
};

// Student context provider
export default function StudentContextProvider({
  children,
}: StudentsContextProviderProps) {
  // States
  const [students, setStudents] = useState<Student[]>(
    getStudentsFromLocalStorage() ?? initialStudentsData,
  );
  const [filterOption, setFilterOption] = useState<"all" | Student["gender"]>(
    "all",
  );

  // Derived values
  const filteredStudents = students.filter((student) => {
    if (filterOption === "all") {
      return true;
    } else {
      return student.gender === filterOption;
    }
  });
  const filteredStudentsCount = filteredStudents.length;

  // Handler functions
  function handleStudentDataAddition(newStudentData: Student) {
    setStudents((previousStudents) => [...previousStudents, newStudentData]);
    toast.success("A new student data added successfully.");
  }
  function handleStudentDataDeletion(studentId: Student["id"]) {
    const newStudents = students.filter((student) => student.id !== studentId);
    setStudents(newStudents);
    toast.success(`Specified student data deleted successfully.`);
  }
  function handleFilterOptionChange(gender: string) {
    setFilterOption(gender as Student["gender"]);
    const captilalizedGender = `${gender[0].toUpperCase()}${gender.slice(1)}`;
    toast.info(`Filter by gender option changed to ${captilalizedGender}`);
  }
  function handleStudentDataUpdation(newStudentData: Student) {
    setStudents((previousStudents) => [
      ...previousStudents.map((student) => {
        if (student.id === newStudentData.id) {
          return newStudentData;
        } else {
          return student;
        }
      }),
    ]);
    toast.success(`Specified student data updated successfully.`);
  }

  // Normal functions
  function getStudentsFromLocalStorage() {
    try {
      const response = localStorage.getItem("students");

      if (response) {
        const students: Student[] = JSON.parse(response);
        return students;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(
          "Failed to get students from local storage:",
          error.message,
        );
      }
    }
  }

  // Callbacks and effects
  const syncStudentsToLocalStorage = useCallback(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);
  useEffect(syncStudentsToLocalStorage, [students, syncStudentsToLocalStorage]);

  // Return
  return (
    <studentsContext.Provider
      value={{
        students,
        filterOption,
        filteredStudents,
        filteredStudentsCount,
        handleFilterOptionChange,
        handleStudentDataAddition,
        handleStudentDataDeletion,
        handleStudentDataUpdation,
      }}
    >
      {children}
    </studentsContext.Provider>
  );
}
