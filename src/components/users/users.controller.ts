import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Role, Roles } from '../../decorators/decorator.rols';
import { AuthenticatedGuard } from '../../guards/authenticated.guard';
import { UpdateUserDto } from './users.dto';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  //! --- admin ---
  @Get()
  @Roles(Role.Admin)
  list() {
    return this.service.list();
  }

  @Get(':id')
  @UseGuards(AuthenticatedGuard)
  @Roles(Role.User)
  get(@Param('id') id: string) {
    return this.service.get(id);
  }

  @Patch(':id')
  @UseGuards(AuthenticatedGuard)
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  @UseGuards(AuthenticatedGuard)
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
