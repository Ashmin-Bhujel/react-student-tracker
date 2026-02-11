import Filter from "./filter";
import AddDataDialog from "./add-data-dialog";
import StudentsGrid from "./students-grid";
import useStudentTracker from "@/hooks/useStudentTracker";

export default function StudentTracker() {
  const {
    filterOption,
    filteredStudents,
    filteredStudentsCount,
    handleFilterOptionChange,
    handleStudentDataAddition,
    handleStudentDataDeletion,
  } = useStudentTracker();

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
