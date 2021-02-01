import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query(ValidationPipe) filterDto: GetTaskFilterDto): ITask[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   }

  //   return this.tasksService.getAllTasks();
  // }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTask: CreateTaskDTO): Promise<Task> {
    return this.tasksService.createTask(createTask);
  }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string) {
  //   this.tasksService.deleteTaskById(id);
  // }

  // @Patch('/:id/status')
  // patchStateById(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPipe) status: ETaskStatus,
  // ): ITask {
  //   return this.tasksService.patchTaskByStatus(id, status);
  // }
}
