import z from 'zod'

const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,25}$/;


// Zod Validation
export const UserCreateDTO = z
  .object({
    firstName: z.string().min(1, "First name is required").max(20),
    lastName: z.string().min(1, "Last name is required").max(20),
    email: z.string().email("Invalid email"),
    username: z.string().min(4, "Username must be at least 4 characters").max(20),
    password: z.string().regex(strongPassword,"Password must be 8-25 chars, include uppercase, lowercase, number and special character"),
    confirmPassword: z.string().regex(strongPassword, "Password doesnt match"),
    gender: z.enum(["male", "female", "other"]),
    birthDate: z.string().min(1, "Birth date is required"),
    university: z.string().min(1, "University is required"),
    address: z.string().min(1, "Address is required"),
    role: z.enum(["user", "admin", "moderator"]),
    company: z.object({
      department: z.string().min(1, "Department is required"),
      name: z.string().min(1, "Company name is required"),
      title: z.string().min(1, "Title is required"),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// export interface IUserData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   username: string;
//   password: string;
//   confirmPassword: string;
//   gender: "male" | "female" | "other";
//   birthDate: string;
//   university: string;
//   address: string;
//   role: "user" | "admin" | "moderator";
//   company: {
//     department: string;
//     name: string;
//     title: string;
//   };
// }

export type IUserData = z.infer<typeof UserCreateDTO>
