import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { AuthenticatedGuard } from 'src/guards/authenticated.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  //! --- admin ---
  @Get()
  list() {
    return this.service.list();
  }

  @Get(':id')
  @UseGuards(AuthenticatedGuard)
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
