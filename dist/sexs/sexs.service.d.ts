import { CreateSexDto } from './dto/create-sex.dto';
import { UpdateSexDto } from './dto/update-sex.dto';
import { Repository } from 'typeorm';
import { Sexs } from './entities/sex.entity';
export declare class SexsService {
    private sexsRepository;
    constructor(sexsRepository: Repository<Sexs>);
    create(createSexsDto: CreateSexDto): Promise<Sexs>;
    findAll(): Promise<Sexs[]>;
    findOne(id: string): Promise<Sexs>;
    update(id: string, updateSexsDto: UpdateSexDto): Promise<void>;
    remove(id: string): Promise<void>;
}
