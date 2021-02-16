import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ETaskStatus } from './task-status.enum';

@Entity()
export class Task extends BaseEntity {
  constructor(
    title = '',
    description = '',
    user: User = null,
    status: ETaskStatus = ETaskStatus.OPEN,
  ) {
    super();
    this.title = title;
    this.description = description;
    this.status = status;
    this.user = user;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: ETaskStatus;

  @ManyToOne(() => User, (user) => user.tasks, { eager: false })
  user: User;
}
