import { useState } from "react";
import type { Student } from "@/types";
import { students as initialStudents } from "@/data";
import Filter from "./filter";
import AddDataDialog from "./add-data-dialog";

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
  }
  function handleFilterOptionChange(value: string) {
    setFilterOption(value as Student["gender"]);
  }

  return (
    <section className="container mx-auto px-4 pt-16">
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
    </section>
  );
}
