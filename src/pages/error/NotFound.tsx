import { Icon } from "@iconify/react";
import { Subheading } from "../../components/ui/typography/Title";
import { NavLink } from "react-router";

export default function NotFound(
  { url = "/", linkText = "Go back" }: Readonly<{ url?: string; linkText?: string }>
) {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white w-1/3 p-6 rounded-md shadow-lg flex flex-col gap-6 items-center">
        
        {/* Icon + Heading */}
        <div className="flex flex-col items-center gap-3">
          <Icon
            icon="material-symbols:warning-sharp"
            className="size-24 text-red-600"
          />

          <Subheading className="text-red-700 text-center drop-shadow-md">
            404! Not Found
          </Subheading>
        </div>

        {/* Description */}
        <p className="text-red-600 text-center text-sm leading-relaxed font-semibold">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Button */}
        <NavLink
          to={url}
          className="flex items-center justify-center gap-2 w-full p-3 border border-red-600 rounded-md text-red-600 font-semibold hover:bg-red-50 transition"
        >
          <Icon icon="ic:round-arrow-back" className="size-7" />
          {linkText}
        </NavLink>

      </div>
    </section>
  );
}