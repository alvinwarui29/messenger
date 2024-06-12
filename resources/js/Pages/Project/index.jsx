import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";
import Pagination from '../../Components/Pagination';
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "../Constants";

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
              <table className="w-full text-left" >
                <thead >
                  <th className="px-3">ID</th>
                  <th className="px-3">IMAGE</th>
                  <th className="px-3">NAME</th>
                  <th className="px-3">STATUS</th>
                  <th className="px-3">CREATE_DATE</th>
                  <th className="px-3">DUE_DATE</th>
                  <th className="px-3">CREATED_BY</th>
                  <th className="px-3 text-right">ACTIONS</th>
                </thead>
                <tbody>
                {projects.data.map((project)=>(
                  <tr key={project.id}>
                    <td className="px-3">
                      {project.id}
                    </td>
                    <td className="px-3">
                    <img width='60px' className="p-3" src={project.image_path} alt="not found"/>
                      
                    </td>
                    <td className="px-3">
                      {project.name}
                    </td>
                    <td className="px-3">
                      <span className={"px-2 py-1 rounded text-white " + PROJECT_STATUS_CLASS_MAP[project.status]} >
                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </span>
                    </td>
                    <td className="px-3">
                      {project.created_at}
                    </td>
                    <td className="px-3">
                      {project.due_date}
                    </td>
                    <td className="px-3">
                      {project.createdBy.name}
                    </td>
                    <td className="px-3">
                      <Link href={route('project.edit',project.id)} className=" px-3 text-green-600">
                        Edit
                      </Link>
                      <Link href={route('project.edit',project.id)} className="text-red-600">
                        Delete
                      </Link>
                    </td>
                  </tr>

                ))}
                  <tr>
                    <td>

                    </td>
                  </tr>
                  <tr>
                    <td>

                    </td>
                  </tr>
                  <tr>
                    <td>

                    </td>
                  </tr>
                </tbody>
              </table>
              <Pagination links={projects.meta.links}/>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default index;
