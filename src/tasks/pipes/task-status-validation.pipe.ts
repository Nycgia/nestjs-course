import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ETaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log('Value', value, 'Metadata', metadata);

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }

    return value;
  }

  private isStatusValid(status: string): boolean {
    return status in ETaskStatus;
  }
}
