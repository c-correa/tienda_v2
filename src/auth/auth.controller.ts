import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    return this.authService.login(user);
  }

  @Post('register-student')
  async register(
    @Body() body: { email: string; password: string; role: Role },
  ) {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    return this.authService['usersService'].create({
      email: body.email,
      password: hashedPassword,
      // role: Role.ESTUDIANTE,
    });
  }
}
