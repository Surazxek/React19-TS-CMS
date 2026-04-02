## Folder Archictetcure
## every URL is => page => A page is component
- a page will have multiple component within
###  every page will have smaller block of reusable element => its a component


















// export default function LoginPage() {
//     return (
//       <main className="flex min-h-screen w-full items-center justify-center bg-gray-50 p-4 dark:bg-slate-900">
//         <div className="w-full max-w-xl rounded-xl bg-white p-8 shadow-2xl shadow-red-100 dark:bg-slate-800 dark:shadow-none">
          
//           <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-slate-800 dark:text-white">
//             Login Page
//           </h1>
  
//           <form action="#" className="flex flex-col gap-5">
//             {/* Username Field */}
//             <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
//               <label
//                 className="font-semibold text-slate-700 lg:w-1/4 dark:text-slate-300"
//                 htmlFor="username"
//               >
//                 Username:
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Enter username"
//                 className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white dark:focus:ring-teal-900"
//               />
//             </div>
  
//             {/* Password Field */}
//             <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
//               <label
//                 className="font-semibold text-slate-700 lg:w-1/4 dark:text-slate-300"
//                 htmlFor="password"
//               >
//                 Password:
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="••••••••"
//                 className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white dark:focus:ring-teal-900"
//               />
//             </div>
  
//             {/* Helpers */}
//             <div className="flex w-full items-center justify-between text-sm">
//               <label htmlFor="rememberme" className="flex items-center gap-2 cursor-pointer dark:text-slate-400">
//                 <input type="checkbox" id="rememberme" className="h-4 w-4 accent-teal-600" />
//                 Remember Me
//               </label>
//               <a
//                 href="#"
//                 className="text-teal-700 underline transition hover:text-teal-500 dark:text-teal-400"
//               >
//                 Forgot Password?
//               </a>
//             </div>
  
//             {/* Buttons */}
//             <div className="mt-2 flex flex-col gap-3 lg:flex-row">
//               <button
//                 type="reset"
//                 className="w-full cursor-pointer rounded-lg border border-gray-200 py-2.5 font-medium text-gray-600 transition hover:bg-gray-100 active:scale-95 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="w-full cursor-pointer rounded-lg bg-teal-700 py-2.5 font-medium text-white shadow-lg transition hover:bg-teal-800 active:scale-95 dark:bg-teal-600 dark:hover:bg-teal-500"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
         
          
//         </div>
//       </main>
//     );
//   }
  