import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get('user')
  async getAllUser(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
