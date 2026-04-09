import { useState, type BaseSyntheticEvent } from "react";
import { FormActionButton } from "../ui/buttons/FormButtons";
import { TextInput } from "../ui/form/Input";
import { FormLabel } from "../ui/form/Label";
import { z, ZodError } from "zod";


const LoginDTO = z.object({
  username: z.string().min(4).max(30),
  password: z.string().nonempty()
})

export interface ICredentials {
  username: string;
  password: string;
}

export default function LoginForm() {
  const [credentials, setCredentials] = useState<ICredentials>({
    username: "",
    password: "",
  });

  const handleChange = (e: BaseSyntheticEvent) => {
    const { value, name } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
  
    try {
      const validData = await LoginDTO.parseAsync(credentials);
      console.log("Valid:", validData);
    } catch (err) {
      if (err instanceof ZodError) {
        console.log(err.issues); 
      } else {
        console.log("Unknown error:", err); 
      }
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex w-full flex-col gap-5">
      
      {/* //username */}

      <div className="w-full flex flex-col gap-1">
        <FormLabel htmlFor="username">Username:</FormLabel>
        <TextInput
          name="username"
          type="text"
          value={credentials.username}
          handleChange={handleChange}
        />
      </div>

      {/* //Password */}
      
      <div className="w-full flex flex-col gap-1">
        <FormLabel htmlFor="password">Password:</FormLabel>
        <TextInput
          name="password"
          type="password"
          value={credentials.password}
          handleChange={handleChange}
        />
      </div>

     {/* //buttons */}

      <div className="w-full flex gap-3">
        <FormActionButton type="reset">Cancel</FormActionButton>
        <FormActionButton type="submit">Login</FormActionButton>
      </div>
    </form>
  );
}