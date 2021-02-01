import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { EntityRepository, Repository } from 'typeorm';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async getTasks(filterDto: GetTaskFilterDto): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (status) {
      query.andWhere(
        'task.title LIKE :search OR task.description LIKE :search',
        { search: `%${search}%` },
      );
    }

    const tasks = await query.getMany();
    return tasks;
  }

  async createTask(createTask: CreateTaskDTO): Promise<Task> {
    const { title, description } = createTask;
    const task = new Task(title, description);
    await task.save();
    return task;
  }
}
