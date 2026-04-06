import {  type ReactNode } from "react";

interface IpageHeadingProps {
  pageTitle?: string | null;
  className?: string;
  children?: ReactNode

}

// export const PageHeading = (props: Readonly<{pageTitle: string, className?: string}>) => { 
// props.pageTitle, props.className// 2nd one is destructure way
// children: Reactelement only accepts jsx

export const PageHeading = (
  { pageTitle , className = 'text-shadow-lg text-indigo-900', children }: Readonly<IpageHeadingProps>
) => {
  return (
    <h1 className={`text-4xl font-semibold  ${className}`}>
      { pageTitle ?? children}
    </h1>
  );
};

export const Subheading = (
  { pageTitle, className = "text-indigo-900", children }: Readonly<IpageHeadingProps>
) => {
  return (
    <h2 className={`text-3xl font-semibold ${className}`}>
      {children || pageTitle}
    </h2>
  );
};