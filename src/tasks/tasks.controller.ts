import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.model'
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): ITask[] {
        return this.tasksService.getAllTasks();
    }

    @Post()
    // createTask(@Body body): ITask {
    // createTask(
    //     @Body('title') title: string,
    //     @Body('description') description: string
    // ): ITask {
    createTask(@Body() createTask: CreateTaskDTO): ITask {
        return this.tasksService.createTask(createTask);
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): ITask {
        return this.tasksService.getTaskById(id);
    }
}
