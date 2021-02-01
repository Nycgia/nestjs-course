import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDTO } from './dto/create-task.dto';
import { Task } from './task.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask(createTask: CreateTaskDTO): Promise<Task> {
    const { title, description } = createTask;
    const task = new Task(title, description);
    await task.save();
    return task;
  }
}
