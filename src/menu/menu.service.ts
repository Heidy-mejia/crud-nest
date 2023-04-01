import { Body, Injectable, Post, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import { promises } from 'readline';

@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>
  ) { }

   create(createMenuDto: CreateMenuDto) {
     return 'This action adds a new menu';
  }
  async createMenu(menu: Menu): Promise<Menu> {
    return await this.menuRepository.save(menu);
  }


  findAll() {
    return this.menuRepository.find();
  }

  findOne(id: string) {
    const menu =this.menuRepository.findOne({where:{id}})
    return menu;
  }

  // update(id: number, updateMenuDto: UpdateMenuDto) {
  //   return `This action updates a #${id} menu`;
  // }

  async updateMenu(id:string,menu:Menu): Promise<void>{
    await this.menuRepository.update(id,menu);

  }
  async remove(uuid: string) {
    await this.menuRepository.delete(uuid);
    return "Eliminado";
  }

}
