import { SexsService } from './sexs.service';
import { CreateSexDto } from './dto/create-sex.dto';
import { UpdateSexDto } from './dto/update-sex.dto';
import { Sexs } from './entities/sex.entity';
export declare class SexsController {
    private readonly sexsService;
    constructor(sexsService: SexsService);
    create(createSexDto: CreateSexDto): Promise<Sexs>;
    findAll(): Promise<Sexs[]>;
    findOne(id: string): Promise<Sexs>;
    update(id: string, updateSexDto: UpdateSexDto): Promise<void>;
    remove(id: string): Promise<void>;
}
