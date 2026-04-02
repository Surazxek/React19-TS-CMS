export const TextInput = () => {
    const name = "username";
  
    return (
      <input
        className="w-full p-2 border border-gray-200 shadow-md rounded-md bg-gray-50"
        type="text"
        id="username"
        name={name}
        placeholder={`Enter your ${name}`}
      />
    );
  };
  
  export const PasswordInput = () => {
    return (
      <input
        className="w-full p-2 border border-gray-200 shadow-md rounded-md bg-gray-50"
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password..."
      />
    );
  };
  
  export const FormLabel = () => {
    return (
      <label
        className="w-full text-lg font-semibold"
        htmlFor="username"
      >
        User name:
      </label>
    );
  };
  
  export default function LoginForm() {
    return (
      <form className="flex w-full flex-col gap-5">
        
        {/* Username */}
        <div className="w-full flex flex-col gap-1">
          <FormLabel />
          <TextInput />
        </div>
  
        {/* Password */}
        <div className="w-full flex flex-col gap-1">
          <label
            className="w-full text-lg font-semibold"
            htmlFor="password"
          >
            Password:
          </label>
          <PasswordInput />
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
        <div className="w-full flex  gap-3 ">
          <button
            type="reset"
            className="rounded-md cursor-pointer w-full transition hover:underline hover:bg-red-950 p-2 border justify-center text-white bg-red-800"
          >
            Cancel
          </button>
  
          <button
            type="submit"
             className="rounded-md cursor-pointer w-full transition hover:underline hover:bg-green-950 p-2 border justify-center text-white bg-green-800"
          >
            Login
          </button>
        </div>
  
      </form>
    );
  }