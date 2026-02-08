import { useState } from "react";
import { toast } from "sonner";
import type { Student } from "@/types";
import { students as initialStudents } from "@/data";
import Filter from "./filter";
import AddDataDialog from "./add-data-dialog";
import StudentsGrid from "./students-grid";

export default function StudentTracker() {
  // States
  const [students, setStudents] = useState<Student[]>(initialStudents);
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

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Options */}
      <div className="flex items-end justify-between">
        {/* Filter */}
        <div className="flex flex-col gap-1">
          <small className="text-muted-foreground">Filter by Gender</small>
          <Filter
            filterOption={filterOption}
            filteredStudentsCount={filteredStudentsCount}
            onFilterOptionChange={handleFilterOptionChange}
          />
        </div>

        {/* Add data dialog */}
        <AddDataDialog onStudentDataAddition={handleStudentDataAddition} />
      </div>

      {/* Students grid */}
      <StudentsGrid
        filteredStudents={filteredStudents}
        onStudentDataDeletion={handleStudentDataDeletion}
      />
    </section>
  );
}
