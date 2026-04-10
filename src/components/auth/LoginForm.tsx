import { FormActionButton } from "../ui/buttons/FormButtons";
import { TextInput } from "../ui/form/Input";
import { FormLabel } from "../ui/form/Label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation
const LoginDTO = z.object({
  username: z
    .string()
    .min(4, "Username must be at least 4 characters")
    .max(30, "Username cannot exceed 30 characters"),

  password: z.string().nonempty("Password is required"), 
});

export interface ICredentials {
  username: string;
  password: string;
}

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ICredentials>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginDTO),
  });

  const handleLogin = (data: ICredentials) => {
    console.log( data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex w-full flex-col gap-5"
    >
      <div className="w-full flex flex-col gap-1">
        <FormLabel htmlFor="username">Username:</FormLabel>

        <TextInput<ICredentials>
          name="username"
          type="text"
          control={control}
          errMsg={errors?.username?.message}
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        <FormLabel htmlFor="password">Password:</FormLabel>

        <TextInput<ICredentials>
          name="password"
          type="password"
          control={control}
          errMsg={errors?.password?.message} // updated
        />
      </div>

      <div className="w-full flex gap-3">
        <FormActionButton type="reset">Cancel</FormActionButton>

        <FormActionButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </FormActionButton>
      </div>
    </form>
  );
}