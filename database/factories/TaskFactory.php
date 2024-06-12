<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    protected $model = Task::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=>fake()->sentence(),
            'description'=> fake()->realText(),
            'image_path'=> fake()->imageUrl(),
            'status'=> fake()->randomElement(['pending','inProgress','completed']),
            'priority'=> fake()->randomElement(['low','medium','high']),
            'assigned_user_id'=>1,
            'updated_by'=>1,
            'created_by'=>1,
            'created_at'=>time(),
            'updated_at'=>time(),
        ];
    }
}
