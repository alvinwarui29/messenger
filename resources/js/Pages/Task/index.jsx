import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";
import Pagination from '../../Components/Pagination';
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "../Constants";
import  TextInput  from '@/Components/TextInput';
import SelectInput from "@/Components/SelectInput";
import {ChevronUpIcon, ChevronDownIcon} from '@heroicons/react/16/solid'

const index = ({ auth, tasks, queryparams=null }) => {
queryparams = queryparams ||{}

const searchFieldChanged =(name,value)=>{
  if(value){
    queryparams[name]= value
  }else{
    delete  queryparams[name] 
  }
  router.get(route('task.index'),queryparams)
};
const onKeyPress = (name,e)=>{
  if(e.key !== "Enter") return;
  searchFieldChanged(name,e.target.value);
}

const sortClicked = (name)=>{
  if(name === queryparams.sort_field){
    if(queryparams.sort_direction === 'asc'){
      queryparams.sort_direction ='desc'
    }else{
      queryparams.sort_direction ='asc'
    }
  }else{
    queryparams.sort_field = name;
    queryparams.sort_direction = 'asc';
  }
  router.get(route('task.index'),queryparams)
}

  return (
    <Authenticated
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Tasks
        </h2>
      }
    >
      <Head title="Tasks" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="overflow-auto">
              <table className="w-full text-left" >
                <thead   >
                  <th onClick={(e) => sortClicked('id')}
                   className="px-3 flex items-center justify-between gap-1 cursor-pointer">
                  ID
                 <div>
                 <ChevronUpIcon className="w-4 cursor-pointer" />
                  <ChevronDownIcon className="w-4 -mt-2 cursor-pointer" />
                 </div>
                  </th>
                  <th  className="px-3">IMAGE</th>
                  <th onClick={(e) => sortClicked('name')} 
                  className="px-3 flex items-center  gap-1 cursor-pointer"
                  >NAME
                  <div>
                 <ChevronUpIcon className="w-4 cursor-pointer" />
                  <ChevronDownIcon className="w-4 -mt-2 cursor-pointer" />
                 </div>
                  </th>
                  <th onClick={(e) => sortClicked('status')} className="px-3">STATUS</th>
                  <th onClick={(e) => sortClicked('created_at')} className="px-3 cursor-pointer">CREATE_DATE</th>
                  <th onClick={(e) => sortClicked('due_date')} 
                  className="px-3 flex items-center gap-1 cursor-pointer">
                  DUE_DATE
                  <div>
                 <ChevronUpIcon className="w-4 cursor-pointer" />
                  <ChevronDownIcon className="w-4 -mt-2 cursor-pointer" />
                 </div>
                  </th>
                  <th onClick={(e) => sortClicked('created_by')} className="px-3">CREATED_BY</th>
                  <th  className="px-3 text-right">ACTIONS</th>
                </thead>
                <thead >
                  <th className="px-3"></th>
                  <th className="px-3"></th>
                  <th className="px-3"> <TextInput className="w-full" defaultValue= {queryparams.name}
                   onChange={e => searchFieldChanged('name',e.target.value)} 
                    onKeyPress={e=> onKeyPress('name',e)}
                   /> </th>
                  <th className="px-3"> <SelectInput  className="w-full"
                  defaultValue={queryparams.status}
                  onChange={e=>searchFieldChanged('status',e.target.value)}
                    
                   >
                    <option value="pending">Select status</option>
                    <option value="pending">Pending</option>
                    <option value="inProgress">In progress</option>
                    <option value="completed">Completed</option>
                   </SelectInput> </th>
                  <th className="px-3"></th>
                  <th className="px-3"></th>
                  <th className="px-3"></th>
                  <th className="px-3 "></th>
                </thead>
                <tbody>
                {tasks.data.map((task)=>(
                  <tr key={task.id}>
                    <td className="px-3">
                      {task.id}
                    </td>
                    <td className="px-3">
                    <img width='60px' className="p-3" src={task.image_path} alt="not found"/>
                      
                    </td>
                    <td className="px-3">
                      {task.name}
                    </td>
                    <td className="px-3">
                      <span className={"px-2 py-1 rounded text-white " + TASK_STATUS_CLASS_MAP[task.status]} >
                        {TASK_STATUS_TEXT_MAP[task.status]}
                      </span>
                    </td>
                    <td className="px-3">
                      {task.created_at}
                    </td>
                    <td className="px-3">
                      {task.due_date}
                    </td>
                    <td className="px-3">
                      {task.createdBy.name}
                    </td>
                    <td className="px-3">
                      <Link href={route('task.edit',task.id)} className=" px-3 text-green-600">
                        Edit
                      </Link>
                      <Link href={route('task.edit',task.id)} className="text-red-600">
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
              </div>
              <Pagination links={tasks.meta.links}/>
            </div>
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default index;
