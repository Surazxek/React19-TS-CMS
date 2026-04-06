import { Outlet } from "react-router";

export default function UserLayout () {
    return(<section className="w-full h-screen flex flex-col">
         <header className="p-5 bg-gray-950 text-white text-center"> Header Block</header>
          <section className="w-full flex gap-5">
            <aside className="bg-gray-800 w-100 text-white flex h-[89vh] p-5"> Side Block</aside>
            <section className=" w-full">

                 {/* {Dynamic Data}   */}
                <Outlet />

            </section>
            </section>
            <footer className="bg-gray-950 text-white flex w-full text-center">
                Footer
            </footer>
    </section>)
}