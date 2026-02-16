import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcn/ui/card";
import { UserCircle } from "lucide-react";
import { Button } from "../shadcn/ui/button";
import { useStudentsContext } from "@/contexts/students-context";

export default function StudentDetails() {
  // Use student context
  const { students, handleStudentDataDeletion } = useStudentsContext();

  // React router
  const { id } = useParams();
  const navigate = useNavigate();

  // Memoized values
  const student = useMemo(() => {
    try {
      if (!id) {
        return null;
      }

      const data = students.find((student) => student.id === id);

      if (!data) {
        throw new Error("Could not get student data!");
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        return null;
      }
    }
  }, [students, id]);

  // Render if student data is unavailable
  if (!student) {
    return (
      <section className="container mx-auto min-h-screen px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold">Student data not available</h2>
      </section>
    );
  }

  // Render if student data is available
  return (
    <section className="container mx-auto min-h-screen px-4 pt-16">
      <Card className="group relative mx-auto w-full max-w-lg pt-0">
        <div className="bg-background/50 absolute inset-0 z-20 aspect-square" />
        {student.imageURL ? (
          <img
            src={student.imageURL}
            alt={student.name}
            className="relative z-30 aspect-square w-full object-cover"
          />
        ) : (
          <div className="relative z-30 aspect-square w-full object-cover">
            <div className="absolute inset-0 flex items-center justify-center">
              <UserCircle className="text-muted-foreground size-1/2" />
            </div>
          </div>
        )}

        {/* Student details */}
        <CardHeader>
          <CardTitle>
            <span className="text-xl font-semibold">{student.name}</span>
          </CardTitle>

          <CardDescription>
            <div>
              <p className="flex items-center justify-between">
                <span className="flex-1">Roll No</span>
                <span className="text-foreground flex-1 text-right">
                  {student.rollNumber}
                </span>
              </p>

              <p className="flex items-center justify-between">
                <span className="flex-1">Date of Birth</span>
                <span className="text-foreground flex-1 text-right">
                  {new Date(student.dateOfBirth).toLocaleDateString()}
                </span>
              </p>

              <p className="flex items-center justify-between">
                <span className="flex-1">Phone No</span>
                <span className="text-foreground flex-1 text-right">
                  {student.phoneNumber}
                </span>
              </p>

              <p className="flex items-center justify-between">
                <span className="flex-1">Grade</span>
                <span className="text-foreground flex-1 text-right capitalize">
                  {student.grade}
                </span>
              </p>

              <p className="flex items-center justify-between">
                <span className="flex-1">Gender</span>
                <span className="text-foreground flex-1 text-right capitalize">
                  {student.gender}
                </span>
              </p>
            </div>
          </CardDescription>
        </CardHeader>

        <CardFooter>
          <div className="flex w-full items-center gap-1">
            {/* Edit button */}
            <Button variant={"secondary"} className="flex-1" asChild>
              <Link to={"edit"}>Edit Student Data</Link>
            </Button>

            {/* Delete button */}
            <Button
              variant={"destructive"}
              className="flex-1"
              onClick={() => {
                handleStudentDataDeletion(student.id);
                navigate("/");
              }}
              title={`Delete student data of ${student.name}`}
            >
              Delete Student Data
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
