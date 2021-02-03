import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto;

    const user = new User(username, password);

    try {
      await user.save();
    } catch (error) {
      if (error === '23505') {
        throw new ConflictException('Username already exists');
      }

      throw new InternalServerErrorException(error);
    }
  }
}
