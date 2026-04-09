import { PageHeading } from "../../components/ui/typography/Title";
import logo from "../../assets/css/images/logo.png";
import { FormLabel } from "../../components/ui/form/Label";
import { TextInput } from "../../components/ui/form/Input";
import { FormActionButton } from "../../components/ui/buttons/FormButtons";
import { NavLink } from "react-router";
import { useState, type BaseSyntheticEvent } from "react";

export interface IForgetPasswordData {
  username: string;
}

export default function ForgetPasswordPage() {
  const [data, setData] = useState<IForgetPasswordData>({
    username: "",
  });

  const handleChange = (ev: BaseSyntheticEvent) => {
    setData({
      ...data,
      username: ev.target.value,
    });
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-gray-100 flex w-full h-screen items-center justify-center">
      <div className="bg-white p-10 w-96 flex justify-center flex-col gap-5 items-center">
        <img src={logo} alt="logo" className="size-40 rounded-full" />
        <PageHeading pageTitle={"Forget Password"} />

        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-5">
          <div className="flex w-full flex-col">
            <FormLabel htmlFor="username">User Name:</FormLabel>
            <TextInput
              type="text"
              name="username"
              value={data.username}
              handleChange={handleChange}
            />
          </div>

          <div className="flex w-full">
            <FormActionButton type="submit">Send Request</FormActionButton>
          </div>

          <div className="mt-2">
            <NavLink
              className="w-full flex items-center justify-center border-green-500 p-3 rounded-full text-lg font-semibold"
              to="/"
            >
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </section>
  );
}