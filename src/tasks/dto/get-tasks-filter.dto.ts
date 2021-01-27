import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { ETaskStatus } from '../task.model';

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn(Object.values(ETaskStatus))
  status: ETaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
