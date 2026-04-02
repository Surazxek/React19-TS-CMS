
import LoginForm from "../../../components/auth/LoginForm";

import logo  from "../../../assets/css/images/logo.png"
import { PageHeading } from "../../../components/ui/typography/Title";


export default function HomePage() {


  return(
    <section className="bg-gray-100 w-full h-screen flex items-center justify-center">
    <div className="w-1/3 bg-white shadow-lg flex flex-col gap-2 rounded-md p-4">
   
      <div className="flex flex-col w-full items-center justify-center ">
      <div className="w-30">
      <img src={logo} alt="logo" className="rounded-full" />
      </div>
      
     
       <PageHeading />
       </div>
        <LoginForm />
        </div>
    
  </section>
  )
}