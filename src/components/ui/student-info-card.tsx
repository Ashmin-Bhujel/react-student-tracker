import { Link } from "react-router";
import { UserCircle } from "lucide-react";
import type { Student } from "@/types";
import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";

type StudentInfoCardProps = {
  student: Student;
};

export default function StudentInfoCard({
  student: {
    id,
    name,
    dateOfBirth,
    imageURL,
    grade,
    phoneNumber,
    rollNumber,
    gender,
  },
}: StudentInfoCardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="bg-background/50 absolute inset-0 z-20 aspect-square" />
      {imageURL ? (
        <img
          src={imageURL}
          alt={name}
          className="relative z-30 aspect-square w-full object-cover"
        />
      ) : (
        <div className="relative z-30 aspect-square w-full object-cover">
          <div className="absolute inset-0 flex items-center justify-center">
            <UserCircle className="text-muted-foreground size-1/2" />
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle>
          <span className="text-xl font-semibold">{name}</span>
        </CardTitle>
        <CardDescription>
          <div>
            <p className="flex items-center justify-between">
              <span className="flex-1">Roll No</span>
              <span className="text-foreground flex-1 text-right">
                {rollNumber}
              </span>
            </p>

            <p className="flex items-center justify-between">
              <span className="flex-1">Date of Birth</span>
              <span className="text-foreground flex-1 text-right">
                {new Date(dateOfBirth).toLocaleDateString()}
              </span>
            </p>

            <p className="flex items-center justify-between">
              <span className="flex-1">Phone No</span>
              <span className="text-foreground flex-1 text-right">
                {phoneNumber}
              </span>
            </p>

            <p className="flex items-center justify-between">
              <span className="flex-1">Grade</span>
              <span className="text-foreground flex-1 text-right capitalize">
                {grade}
              </span>
            </p>

            <p className="flex items-center justify-between">
              <span className="flex-1">Gender</span>
              <span className="text-foreground flex-1 text-right capitalize">
                {gender}
              </span>
            </p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link to={`/students/${id}`}>View More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
