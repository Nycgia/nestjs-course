import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { ETaskStatus } from '../task-status.enum';

export class GetTaskFilterDto {
  @IsOptional()
  @IsIn(Object.values(ETaskStatus))
  status: ETaskStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
