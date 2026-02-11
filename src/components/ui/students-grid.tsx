import type { Student } from "@/types";
import StudentInfoCard from "./student-info-card";

type StudentsGridProps = {
  filteredStudents: Student[];
  onStudentDataDeletion: (studentId: Student["id"]) => void;
};

export default function StudentsGrid({
  filteredStudents,
  onStudentDataDeletion,
}: StudentsGridProps) {
  return (
    <div className="flex flex-col gap-8 py-8">
      {/* Header */}
      <header>
        <h2 className="text-2xl font-semibold">Students Grid</h2>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-8 max-xl:grid-cols-3">
        {filteredStudents.map((student) => (
          <StudentInfoCard
            key={student.id}
            student={student}
            onStudentDataDeletion={onStudentDataDeletion}
          />
        ))}
      </div>
    </div>
  );
}
