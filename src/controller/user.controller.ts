import { JwtService } from '@nestjs/jwt';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  UploadedFiles,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { User } from '../model/user.schema';
import { UserService } from '../service/user.service';

@Controller('/api/v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Post('/signup')
  async Singup(@Res() response, @Body() user: User) {
    const newUser = await this.userService.signup(user);
    return response.status(HttpStatus.CREATED).json(newUser);
  }

  @Post('/login')
  async login(@Res() response, @Body() user: User) {
    const token = await this.userService.login(user, this.jwtService);
    return response.status(HttpStatus.OK).json(token);
  }
}
