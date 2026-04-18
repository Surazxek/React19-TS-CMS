import { FormActionButton } from "../ui/buttons/FormButtons";
import { TextInput } from "../ui/form/Input";
import { FormLabel } from "../ui/form/Label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Cookies from "js-cookie";
import axiosInstance from "../../lib/client/axios-client";

// Validation
const LoginDTO = z.object({
  username: z
    .string()
    .min(4, "Username must be at least 4 characters")
    .max(30, "Username cannot exceed 30 characters"),

  password: z.string().min(1, "Password is required"),
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

  const handleLogin = async (data: ICredentials) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        ...data,
        expiresInMins: 180,
      });
      
    console.log(response);
      //session  //expires day  
      Cookies.set("_at_60", response.data.accessToken,{
        expires: 1, 
        sameSite: "lax",
        secure: true,
      })

      Cookies.set("_at_60", response.data.refreshToken,{
        expires: 1, 
        sameSite: "lax",
        secure: true,
      })
  
      
  
      toast.success("Login successful");
  
    } catch (exception) {
     console.log({exception})
      toast.error("Error while Logging in",{
        description: "Check your Credentials Again Error"
      })
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex w-full flex-col gap-5"
    >
      <div className="w-full flex flex-col gap-1">
        <FormLabel htmlFor="username">Username:</FormLabel>
        <TextInput
          name="username"
          type="text"
          control={control}
          errMsg={errors?.username?.message}
        />
      </div>

      <div className="w-full flex flex-col gap-1">
        <FormLabel htmlFor="password">Password:</FormLabel>
        <TextInput
          name="password"
          type="password"
          control={control}
          errMsg={errors?.password?.message}
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