import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from './entities/menu.entity';
export declare class MenuService {
    private menuRepository;
    constructor(menuRepository: Repository<Menu>);
    create(createMenuDto: CreateMenuDto): string;
    createMenu(menu: Menu): Promise<Menu>;
    findAll(): Promise<Menu[]>;
    findOne(id: string): Promise<Menu>;
    updateMenu(id: string, menu: Menu): Promise<void>;
    remove(uuid: string): Promise<string>;
}
