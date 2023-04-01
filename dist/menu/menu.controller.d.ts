import { Menu } from './entities/menu.entity';
import { MenuService } from './menu.service';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    createMenu(menu: Menu): Promise<Menu>;
    findAll(): Promise<Menu[]>;
    findOne(uuid: string): Promise<Menu>;
    updateMenu(id: string, menu: Menu): Promise<void>;
    remove(uuid: string): Promise<string>;
}
