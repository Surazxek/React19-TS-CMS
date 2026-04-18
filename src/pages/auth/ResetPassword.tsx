import { useForm } from "react-hook-form";
import logo from "../../assets/css/images/logo.png"
import { FormLabel } from "../../components/ui/form/Label";
import { TextInput } from "../../components/ui/form/Input";
import { FormActionButton } from "../../components/ui/buttons/FormButtons";
import { PageHeading } from "../../components/ui/typography/Title";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axiosInstance from "../../lib/client/axios-client";
import { toast } from "sonner";
import { useSearchParams } from "react-router";

// Zod Validation
const ResetPasswordDTO = z
  .object({
    password: z
      .string()
      .min(8, "Minimum 8 characters")
      .max(25, "Maximum 25 characters")
      .regex(/[A-Z]/, "Must include uppercase")
      .regex(/[a-z]/, "Must include lowercase")
      .regex(/\d/, "Must include number")
      .regex(/[\W_]/, "Must include special character"),

    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type IResetPassword = z.infer<typeof ResetPasswordDTO>;

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // from URL

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IResetPassword>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(ResetPasswordDTO),
  });

  const handleResetPassword = async (data: IResetPassword) => {
    try {
      const response = await axiosInstance.post("/auth/reset-password", {
        token,
        password: data.password,
      });

      console.log(response.data);

      toast.success("Password reset successful");
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <section className="bg-gray-100 flex w-full min-h-screen items-center justify-center px-4">
      
      <div className="bg-white w-full max-w-md p-6 sm:p-8 flex flex-col gap-6 items-center rounded-xl shadow-lg">


         {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-24 sm:w-32 rounded-full shadow-md"
      />
        
        <PageHeading className="text-indigo-700 text-center">
          Reset Password
        </PageHeading>

        <form
          onSubmit={handleSubmit(handleResetPassword)}
          className="flex flex-col w-full gap-4"
        >

          {/* Password */}
          <div className="flex flex-col gap-1">
            <FormLabel htmlFor="password">New Password</FormLabel>
            <TextInput
              name="password"
              type="password"
              control={control}
              errMsg={errors?.password?.message}
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1">
            <FormLabel htmlFor="confirmPassword">
              Confirm Password
            </FormLabel>
            <TextInput
              name="confirmPassword"
              type="password"
              control={control}
              errMsg={errors?.confirmPassword?.message}
            />
          </div>

          {/* Button */}
          <FormActionButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </FormActionButton>

        </form>
      </div>
    </section>
  );
}