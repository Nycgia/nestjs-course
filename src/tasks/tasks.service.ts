import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { title } from 'process';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { ETaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
  ) {}

  async getTaskById(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne(id);

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} Not Found`);
    }

    return task;
  }

  async createTask(createTask: CreateTaskDTO): Promise<Task> {
    return this.taskRepository.createTask(createTask);
  }

  // private tasks: ITask[] = [];
  // getAllTasks(): ITask[] {
  //   return this.tasks;
  // }
  // getTasksWithFilters(filterDto: GetTaskFilterDto): ITask[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       (task) =>
  //         task.title.includes(search) || task.description.includes(search),
  //     );
  //   }
  //   return tasks;
  // }

  // deleteTaskById(id: string) {
  //   const task = this.getTaskById(id);
  //   this.tasks.splice(this.tasks.indexOf(task), 1);
  // }
  // patchTaskByStatus(id: string, status: ETaskStatus): ITask {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
