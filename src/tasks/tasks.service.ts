import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
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
  // getTaskById(id: string): ITask {
  //   const task = this.tasks.find((task) => task.id === id);
  //   if (!task) {
  //     throw new NotFoundException(`Task With ID ${id} not exist`);
  //   }
  //   return task;
  // }
  // createTask(createTask: CreateTaskDTO): ITask {
  //   const task: ITask = {
  //     id: uuid(),
  //     title: createTask.title,
  //     description: createTask.description,
  //     status: ETaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
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
