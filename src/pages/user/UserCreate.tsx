import { useForm } from "react-hook-form";
import { FormLabel } from "../../components/ui/form/Label";
import { TextInput } from "../../components/ui/form/Input";

export default function UserCreate() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      gender: "",
      password: "",
      birthDate: "",
      university: "",
      company: { department: "", name: "", title: "" },
      address: "",
      role: "user",
    },
  });

  const registerUser = () => {};

  return (
    <section className="w-full p-5 bg-gray-50 flex h-screen">
      <div className="w-full p-5 bg-white">
        <form onSubmit={handleSubmit(registerUser)} className="w-full">
          <div className="w-full flex flex-col gap-1">
            <FormLabel htmlFor="userName">Username:</FormLabel>

            <TextInput
              name="firstName"
              type="text"
              control={control}
              errMsg={errors?.firstName?.message}
            />
          </div>
        </form>
      </div>
    </section>
  );
}