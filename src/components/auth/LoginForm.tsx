import { FormActionButton } from "../ui/buttons/FormButtons";
import { TextInput } from "../ui/form/Input";
import { FormLabel } from "../ui/form/Label";

export default function LoginForm() {
  return (
    <form className="flex w-full flex-col gap-5">
      
      {/* Username */}
      <div className="w-full flex flex-col gap-1">
        <FormLabel htmlFor="username">Username:</FormLabel>
        <TextInput name="username" type="text" />
      </div>

      {/* Password */}
      <div className="w-full flex flex-col gap-1">
        <FormLabel htmlFor="password">Password:</FormLabel>
        <TextInput name="password" type="password" />
      </div>

      {/* Forgot password */}
      <div className="w-full flex justify-end">
        <a
          href="/forget-password"
          className="text-sm text-green-700 underline hover:scale-105 hover:text-green-800 transition-all italic"
        >
          Forget Password?
        </a>
      </div>

      {/* Buttons */}
      <div className="w-full flex gap-3">
        <FormActionButton type="reset">Cancel</FormActionButton>
        <FormActionButton type="submit">Login</FormActionButton>
        

      </div>
    </form>
  );
}