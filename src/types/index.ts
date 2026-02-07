import * as z from "zod";

export const studentSchema = z.object({
  id: z.uuid(),
  name: z
    .string("Please provide student name.")
    .min(2, "Too short! Student name must have at least 2 characters.")
    .max(32, "Too long! Student name must have at most 32 characters."),
  imageURL: z.string(),
  grade: z.enum(["a+", "a", "b+", "b", "c+", "c", "f", "not graded"]),
  phoneNumber: z
    .string("Please provide student phone number.")
    .length(10, "Student phone number must be of length 10."),
  rollNumber: z
    .number("Please provide student roll number.")
    .min(1, "Too low! Student roll number must be greater than 0.")
    .max(100, "Too high! Student roll number cannot be greater than 100."),
  gender: z.enum(["male", "female", "other", "unspecified"]),
});

export type Student = z.infer<typeof studentSchema>;
