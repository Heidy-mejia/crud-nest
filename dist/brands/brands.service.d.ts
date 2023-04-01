import { Repository } from 'typeorm';
import { Brands } from './entities/brand.entity';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { CreateBrandDto } from './dto/create-brand.dto';
export declare class BrandsService {
    private brandsRepository;
    constructor(brandsRepository: Repository<Brands>);
    create(createBrandDto: CreateBrandDto): Promise<Brands>;
    findAll(): Promise<Brands[]>;
    findOne(id: string): Promise<Brands>;
    update(id: string, updateBrandDto: UpdateBrandDto): Promise<void>;
    remove(id: string): Promise<void>;
}
