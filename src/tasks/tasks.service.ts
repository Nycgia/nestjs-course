import { Injectable } from '@nestjs/common';
import { ITask, ETaskStatus } from './task.model';
import { v1 as uuid } from 'uuid';
import { CreateTaskDTO } from './dto/create-task.dto'

@Injectable()
export class TasksService {
    private tasks: ITask[] = [];

    getAllTasks(): ITask[] {
        return this.tasks;
    }

    createTask(createTask: CreateTaskDTO): ITask {
        const task: ITask = {
            id: uuid(),
            title: createTask.title,
            description: createTask.description,
            status: ETaskStatus.OPEN,
        };

        this.tasks.push(task);
        return task;
    }
}
