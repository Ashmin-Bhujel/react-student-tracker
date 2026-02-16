import * as z from "zod";

// Student schema
export const studentSchema = z.object({
  id: z.uuid(),
  name: z
    .string("Please provide the student name.")
    .min(2, "Too short! The student name must have at least 2 characters.")
    .max(32, "Too long! The student name must have at most 32 characters."),
  dateOfBirth: z.date("Please provide the date of birth."),
  imageURL: z.string(),
  grade: z.enum(["a+", "a", "b+", "b", "c+", "c", "f", "not graded"]),
  phoneNumber: z
    .string("Please provide the student phone number.")
    .length(10, "The student phone number must be of length 10."),
  rollNumber: z
    .number("Please provide the student roll number.")
    .min(1, "Too low! The student roll number must be greater than 0.")
    .max(100, "Too high! The student roll number cannot be greater than 100."),
  gender: z.enum(["male", "female", "other", "unspecified"]),
});

// Infer type definition for student from student schema
export type Student = z.infer<typeof studentSchema>;
