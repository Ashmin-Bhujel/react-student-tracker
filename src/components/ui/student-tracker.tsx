import { Link } from "react-router";
import { Plus } from "lucide-react";
import Filter from "./filter";
import StudentsGrid from "./students-grid";
import { Button } from "../shadcn/ui/button";
import { useStudentsContext } from "@/contexts/students-context";

export default function StudentTracker() {
  const {
    filterOption,
    filteredStudents,
    filteredStudentsCount,
    handleFilterOptionChange,
  } = useStudentsContext();

  return (
    <section className="container mx-auto min-h-screen px-4 py-16">
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
        <Button variant="outline" asChild>
          <Link to={"/students/add"}>
            <Plus />
            <span>Add new student data</span>
          </Link>
        </Button>
      </div>

      {/* Students grid */}
      {filteredStudents.length === 0 ? (
        <div className="py-16">
          <h2 className="text-center text-2xl font-semibold">
            No Students Data Available
          </h2>
        </div>
      ) : (
        <StudentsGrid filteredStudents={filteredStudents} />
      )}
    </section>
  );
}
