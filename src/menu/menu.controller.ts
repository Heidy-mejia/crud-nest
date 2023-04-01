import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import { MenuService } from './menu.service';
import { ParseUUIDPipe } from '@nestjs/common';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) { }

  @Post()
async createMenu(@Body() menu: Menu): Promise<Menu> {
  return this.menuService.createMenu(menu);
}

  @Get()
  findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') uuid: string) {
    return this.menuService.findOne(uuid);
  }

  @Patch(':id')
  async updateMenu(@Param('id') id: string, @Body() menu: Menu) {
    await this.menuService.updateMenu(id,menu)
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) uuid: string) {
    return this.menuService.remove(uuid);
  }
}