import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import type { Student } from "@/types";
import { students as initialStudents } from "@/data";

export default function useStudentTracker() {
  // States
  const [students, setStudents] = useState<Student[]>(
    getStudentsFromLocalStorage() ?? initialStudents,
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
  return {
    filterOption,
    filteredStudents,
    filteredStudentsCount,
    handleFilterOptionChange,
    handleStudentDataAddition,
    handleStudentDataDeletion,
  };
}
