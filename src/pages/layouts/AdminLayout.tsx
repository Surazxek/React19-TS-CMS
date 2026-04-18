import { NavLink, Outlet } from "react-router";
import { PageHeading } from "../../components/ui/typography/Title";

export default function AdminLayout() {
  return (
    <>
      <header className="w-full p-5 bg-indigo-950 text-white flex justify-between items-center">
        <PageHeading className="text-white">Admin Portal</PageHeading>
        <nav>
          <ul>
            <li>
              <NavLink to="/admin">Suraj Karki</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section className="w-full flex ">
        <aside className="w-1/4 h-[95vh] bg-gray-700 text-white p-3">
          <nav>
            <ul>
              <li>
                <NavLink to='/admin/user/create'>User Create</NavLink>
              </li>
            </ul>
          </nav>
        </aside>

       

        <Outlet />
        
      </section>
      <footer className="w-full px-5 py-3 bg-indigo-950 text-white flex justify-center items-center">
        &copy; Suraj Karki
      </footer>
    </>
  );
}