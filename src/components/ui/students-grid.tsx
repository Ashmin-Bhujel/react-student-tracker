import type { Student } from "@/types";

import StudentInfoCard from "./student-info-card";

// Type definition for students grid props
type StudentsGridProps = {
  filteredStudents: Student[];
};

export default function StudentsGrid({ filteredStudents }: StudentsGridProps) {
  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Header */}
      <header>
        <h2 className="text-2xl font-semibold">Students Grid</h2>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        {filteredStudents.map((student) => (
          <StudentInfoCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}
