import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    private tasks = ["peter", "hola", "hi"];

    getAllTasks() {
        return this.tasks;
    }
}
