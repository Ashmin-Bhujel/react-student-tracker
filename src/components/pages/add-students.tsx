import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { studentSchema, type Student } from "@/types";
import useStudentTracker from "@/hooks/useStudentTracker";
import { Field, FieldError, FieldGroup, FieldLabel } from "../shadcn/ui/field";
import { Input } from "../shadcn/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../shadcn/ui/popover";
import { Button } from "../shadcn/ui/button";
import { Calendar } from "../shadcn/ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../shadcn/ui/select";

export default function AddStudents() {
  // States
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const { handleStudentDataAddition } = useStudentTracker();

  // React router
  const navigate = useNavigate();

  // React hook form
  const studentForm = useForm<Student>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      id: crypto.randomUUID(),
      name: "",
      dateOfBirth: new Date(),
      imageURL: "",
      grade: "not graded",
      phoneNumber: "",
      rollNumber: 0,
      gender: "unspecified",
    },
  });

  // Normal values
  const grades: Student["grade"][] = [
    "not graded",
    "a+",
    "a",
    "b+",
    "b",
    "c+",
    "c",
    "f",
  ];
  const genders: Student["gender"][] = [
    "unspecified",
    "male",
    "female",
    "other",
  ];

  // Handler functions
  function onSubmit(studentData: Student) {
    handleStudentDataAddition(studentData);
    studentForm.reset();
    // Navigate to students list after submission
    navigate("/");
  }

  return (
    <section className="container mx-auto min-h-screen px-4 py-16">
      {/* Header */}
      <header className="text-center">
        <h2 className="text-2xl font-semibold">Add new student data</h2>
        <p className="text-muted-foreground text-xs">
          Fill up the form with correct data to add new student data.
        </p>
      </header>

      {/* Form */}
      <form
        id="add-student-data-form"
        onSubmit={studentForm.handleSubmit(onSubmit)}
        className="mx-auto mt-12 max-w-md"
      >
        <FieldGroup>
          {/* Name */}
          <Controller
            control={studentForm.control}
            name="name"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input
                  {...field}
                  id="name"
                  name="name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter student name"
                  autoComplete="name"
                  autoFocus
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Image URL */}
          <Controller
            control={studentForm.control}
            name="imageURL"
            render={({ field }) => (
              <Field>
                <FieldLabel htmlFor="image-url">Image URL</FieldLabel>
                <Input
                  {...field}
                  id="image-url"
                  name="image-url"
                  placeholder="Enter image url for student"
                />
              </Field>
            )}
          />

          {/* Date of birth */}
          <Controller
            control={studentForm.control}
            name="dateOfBirth"
            render={({ field }) => {
              const selectedDate = field.value
                ? new Date(field.value)
                : undefined;
              return (
                <Field>
                  <FieldLabel htmlFor="date">Date of Birth</FieldLabel>
                  <Popover
                    open={datePickerOpen}
                    onOpenChange={setDatePickerOpen}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date"
                        className="justify-start font-normal"
                      >
                        {selectedDate
                          ? selectedDate.toLocaleDateString()
                          : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        defaultMonth={selectedDate}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                          console.log(date);
                          if (date) {
                            field.onChange(new Date(date));
                          }
                          setDatePickerOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </Field>
              );
            }}
          />

          {/* Grade */}
          <Controller
            control={studentForm.control}
            name="grade"
            render={({ field }) => (
              <Field orientation={"vertical"}>
                <FieldLabel htmlFor="grade">Grade</FieldLabel>
                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger id="grade" className="min-w-30">
                    <SelectValue placeholder="Select Grade" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectGroup>
                      <SelectLabel>Grade</SelectLabel>
                      {grades.map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          <span className="capitalize">{grade}</span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            )}
          />

          {/* Phone number */}
          <Controller
            control={studentForm.control}
            name="phoneNumber"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="phone-number">Phone Number</FieldLabel>
                <Input
                  {...field}
                  id="phone-number"
                  name="phone-number"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter student phone number"
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    if (isNaN(value)) {
                      return;
                    }
                    field.onChange(event.target.value);
                  }}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Roll Number */}
          <Controller
            control={studentForm.control}
            name="rollNumber"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="roll-number">Roll Number</FieldLabel>
                <Input
                  {...field}
                  type="text"
                  id="roll-number"
                  name="roll-number"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter student roll number"
                  onChange={(event) => {
                    const value = Number(event.target.value);
                    if (isNaN(value)) {
                      return;
                    }
                    field.onChange(value);
                  }}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Gender */}
          <Controller
            control={studentForm.control}
            name="gender"
            render={({ field }) => (
              <Field orientation={"vertical"}>
                <FieldLabel htmlFor="gender">Gender</FieldLabel>
                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger id="gender" className="min-w-30">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectGroup>
                      <SelectLabel>Gender</SelectLabel>
                      {genders.map((gender) => (
                        <SelectItem key={gender} value={gender}>
                          <span className="capitalize">{gender}</span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            )}
          />
        </FieldGroup>

        {/* Buttons */}
        <div className="mt-8 flex items-center gap-1 *:flex-1">
          <Button
            variant="outline"
            type="reset"
            form="add-student-data-form"
            onClick={() => studentForm.reset()}
          >
            Reset
          </Button>

          <Button type="submit" form="add-student-data-form">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}
