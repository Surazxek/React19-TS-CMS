import { PageHeading } from "../../components/ui/typography/Title";
import logo from "../../assets/css/images/logo.png";
import { FormLabel } from "../../components/ui/form/Label";
import { TextInput } from "../../components/ui/form/Input";
import { FormActionButton } from "../../components/ui/buttons/FormButtons";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Validation
const ForgetPasswordDTO = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .min(4, "Username must be at least 4 characters"),
});

export interface IForgetPasswordData {
  username: string;
}

export default function ForgetPasswordPage() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<IForgetPasswordData>({
    defaultValues: {
      username: "",
    },
    resolver: zodResolver(ForgetPasswordDTO),
  });

  const onSubmit = (data: IForgetPasswordData) => {
    console.log(data);
  };

  return (
    <section className="bg-gray-100 flex w-full min-h-screen items-center justify-center px-4">
      
      <div className="bg-white w-full max-w-md p-6 sm:p-8 flex flex-col gap-6 items-center rounded-xl shadow-lg">
        
        <img
          src={logo}
          alt="logo"
          className="w-24 sm:w-32 md:w-36 rounded-full shadow-md"
        />
  
        <PageHeading
          pageTitle={"Forget Password"}
          className="text-center text-indigo-700"
        />
  
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-4"
        >
          <div className="flex w-full flex-col gap-1">
            <FormLabel htmlFor="username" className="text-gray-700">
              User Name
            </FormLabel>
  
            <TextInput
              type="text"
              name="username"
              control={control}
              errMsg={errors?.username?.message}
              className="focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400"
            />
          </div>
  
          <div className="flex w-full">
            <FormActionButton
              type="submit"
              disabled={isSubmitting}
              className="bg-indigo-600 text-white hover:bg-indigo-700 w-full"
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </FormActionButton>
          </div>
  
          <div className="mt-2">
            <NavLink
              to="/"
              className="w-full flex items-center justify-center border border-indigo-500 p-3 rounded-md text-indigo-600 font-semibold hover:bg-indigo-50 transition"
            >
              Login
            </NavLink>
          </div>
        </form>
  
      </div>
    </section>
  );
}