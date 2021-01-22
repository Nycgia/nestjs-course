import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.model'

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(): ITask[] {
        return this.tasksService.getAllTasks();
    }
}