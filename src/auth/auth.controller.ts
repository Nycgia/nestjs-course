import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { ChangePassDto } from './dto/change-pass.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Patch('/user/:id/changepassword')
  changePassword(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) changePassDto: ChangePassDto,
  ) {
    return this.authService.changePassword(id, changePassDto);
  }
}
