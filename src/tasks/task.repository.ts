import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';
import { EntityRepository, Repository } from 'typeorm';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { User } from 'src/auth/user.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async getTasks(filterDto: GetTaskFilterDto, user: User): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');

    query.where('task.userId = :userId', { userId: user.id });

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

  async createTask(createTask: CreateTaskDTO, user: User): Promise<Task> {
    const { title, description } = createTask;
    const task = new Task(title, description, user);
    await task.save();

    delete task.user;

    return task;
  }
}
