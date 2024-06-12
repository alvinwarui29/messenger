import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const index = ({ auth, projects }) => {
  return (
    <Authenticated
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Projects
        </h2>
      }
    >
      <Head title="Projects" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table className="w-full" >
                <thead >
                  <th className="px-3">ID</th>
                  <th className="px-3">IMAGE</th>
                  <th className="px-3">NAME</th>
                  <th className="px-3">STATUS</th>
                  <th className="px-3">CREATE_DATE</th>
                  <th className="px-3">DUE_DATE</th>
                  <th className="px-3">CREATED_BY</th>
                  <th className="px-3">ACTIONS</th>
                </thead>
                <tbody>
                  <tr>
                    <td>

                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default index;
