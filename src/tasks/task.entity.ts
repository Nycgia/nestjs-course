import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ETaskStatus } from './task-status.enum';

@Entity()
export class Task extends BaseEntity {
  constructor(
    title = '',
    description = '',
    status: ETaskStatus = ETaskStatus.OPEN,
  ) {
    super();
    this.title = title;
    this.description = description;
    this.status = status;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: ETaskStatus;
}
