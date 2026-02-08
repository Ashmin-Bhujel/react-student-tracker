import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import type { Student } from "@/types";
import { studentSchema } from "@/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";

type AddDataDialogProps = {
  onStudentDataAddition: (newStudentData: Student) => void;
};

export default function AddDataDialog({
  onStudentDataAddition,
}: AddDataDialogProps) {
  // States
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  // React hook form
  const studentForm = useForm<Student>({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      id: crypto.randomUUID(),
      name: "",
      dateOfBirth: new Date().toISOString().split("T")[0],
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
    onStudentDataAddition(studentData);
    studentForm.reset();
    toast.success("A new student data added successfully.");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus />
          <span>Add new student data</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Add new student data</DialogTitle>
          <DialogDescription>
            Fill up the form with correct data to add new student data.
          </DialogDescription>
        </DialogHeader>

        <form id="add-new-student-data-form">
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
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
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
                            if (date) {
                              field.onChange(date.toISOString().split("T")[0]);
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

            {/* Grade */}
            <Controller
              control={studentForm.control}
              name="grade"
              render={({ field }) => (
                <Field orientation={"responsive"}>
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
                <Field orientation={"responsive"}>
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
        </form>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </DialogClose>

          <Button
            type="submit"
            form="add-new-student-data-form"
            onClick={(event) => {
              event.preventDefault();
              studentForm.handleSubmit(onSubmit)();
            }}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
