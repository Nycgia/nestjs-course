import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ChangePassDto } from './dto/change-pass.dto';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  async getUser(userId: number): Promise<User> {
    const user = await this.userRepository.findOne(userId);

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} Not Found`);
    }

    return user;
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async changePassword(
    userId: number,
    changePassDto: ChangePassDto,
  ): Promise<void> {
    const user = await this.getUser(userId);

    if (user.password !== changePassDto.lastPassword) {
      throw new BadRequestException('The last password is wrong');
    } else if (user.password === changePassDto.newPassword) {
      throw new BadRequestException('The new password is the same');
    }

    user.password = changePassDto.newPassword;

    await user.save();
  }
}
