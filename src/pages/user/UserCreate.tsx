import { useForm } from "react-hook-form";
import { FormLabel } from "../../components/ui/form/Label";
import { TextInput, SelectInput } from "../../components/ui/form/Input";
import { FormActionButton } from "../../components/ui/buttons/FormButtons";
import { PageHeading } from "../../components/ui/typography/Title";
import { zodResolver } from "@hookform/resolvers/zod";
import { type IUserData, UserCreateDTO } from "../../lib/types/AuthType";

export default function UserCreate() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUserData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: "male",
      birthDate: "",
      university: "",
      address: "",
      role: "user",
      company: {
        department: "",
        name: "",
        title: "",
      },
    },
    resolver: zodResolver(UserCreateDTO),
  });

  const userRegister = (data: IUserData) => {
    console.log(data);
  };

  return (
    <section className="flex-1 bg-gray-100 p-6 overflow-y-auto">
      
      <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 flex flex-col gap-6">

        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 pb-4">
          <PageHeading className="text-indigo-700">
            Register User
          </PageHeading>
        </div>

        <form
          onSubmit={handleSubmit(userRegister)}
          className="flex flex-col gap-5"
        >

          {/* First + Last */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full gap-1">
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <TextInput name="firstName" control={control} errMsg={errors?.firstName?.message} />
            </div>

            <div className="flex flex-col w-full gap-1">
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <TextInput name="lastName" control={control} errMsg={errors?.lastName?.message} />
            </div>
          </div>

          {/* Email + Username */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full gap-1">
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextInput name="email" type="email" control={control} errMsg={errors?.email?.message} />
            </div>

            <div className="flex flex-col w-full gap-1">
              <FormLabel htmlFor="username">Username</FormLabel>
              <TextInput name="username" control={control} errMsg={errors?.username?.message} />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full gap-1">
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextInput name="password" type="password" control={control} errMsg={errors?.password?.message} />
            </div>

            <div className="flex flex-col w-full gap-1">
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <TextInput name="confirmPassword" type="password" control={control} errMsg={errors?.confirmPassword?.message} />
            </div>
          </div>

          {/* DOB + Gender */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full gap-1">
              <FormLabel htmlFor="birthDate">Birth Date</FormLabel>
              <TextInput name="birthDate" type="date" control={control} errMsg={errors?.birthDate?.message} />
            </div>

            <div className="flex flex-col w-full gap-1">
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <SelectInput
                name="gender"
                control={control}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                  { label: "Other", value: "other" },
                ]}
              />
            </div>
          </div>

          {/* University */}
          <div className="flex flex-col w-full gap-1">
            <FormLabel htmlFor="university">University</FormLabel>
            <TextInput name="university" control={control} errMsg={errors?.university?.message} />
          </div>

          {/* Company */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full gap-1">
              <FormLabel htmlFor="company.name">Company Name</FormLabel>
              <TextInput name="company.name" control={control} errMsg={errors?.company?.name?.message} />
            </div>

            <div className="flex flex-col w-full gap-1">
              <FormLabel htmlFor="company.title">Designation</FormLabel>
              <TextInput name="company.title" control={control} errMsg={errors?.company?.title?.message} />
            </div>

            <div className="flex flex-col w-full gap-1">
              <FormLabel htmlFor="company.department">Department</FormLabel>
              <TextInput name="company.department" control={control} errMsg={errors?.company?.department?.message} />
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col w-full gap-1">
            <FormLabel htmlFor="address">Address</FormLabel>
            <TextInput name="address" control={control} errMsg={errors?.address?.message} />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <FormActionButton type="reset">Cancel</FormActionButton>
            <FormActionButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </FormActionButton>
          </div>

        </form>
      </div>
    </section>
  );
}