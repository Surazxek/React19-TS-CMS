import { NavLink } from "react-router";
import { PageHeading } from "../../components/ui/typography/Title";

export default function UserList() {
  return (
    <section className="w-full flex p-5 bg-gray-100 flex-col ">
      
      <div className="flex justify-between w-full ">
        
        <PageHeading>User Listing</PageHeading>

        <NavLink
          to="/admin/user/create"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Add User
        </NavLink>

        <div className="flex w-full">
            <table>
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th> 

                      <th>Role</th> 
                      <th>Gender</th> 
                      <th>Address</th>
                      <th>Company</th>
                      <th>Action</th>
                    </tr>
                </thead>
            </table>

        </div>

      </div>

    </section>
  );
}