<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Http\Resources\TaskResource;
use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Project::query();
        $sort_field = request("sort_field","created_at");
        $sort_direction= request("sort_direction","asc");
        
        if(request("name")){
            $query->where("name","like","%". request("name")."%");
        }
        if(request("status")){
            $query->where("status", request("status"));
        }

        
        
        $projects= $query->orderBy($sort_field,$sort_direction)->paginate(10);
        return inertia('Project/index',[
            "projects"=>ProjectResource::collection($projects),
            "queryparams"=> request()->query()?:  null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        $query = $project->tasks();
        $sort_field = request("sort_field","created_at");
            $sort_direction= request("sort_direction","asc");
            
            if(request("name")){
                $query->where("name","like","%". request("name")."%");
            }
            if(request("status")){
                $query->where("status", request("status"));
            }
    
            
            
            $tasks= $query->orderBy($sort_field,$sort_direction)->paginate(10);
        return inertia('Project/Show',[
            "project"=>new ProjectResource($project),
            "tasks"=> $tasks,
            "queryparams"=> request()->query()?:  null,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
