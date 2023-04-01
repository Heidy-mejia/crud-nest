import { BrandsService } from './brands.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brands } from './entities/brand.entity';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    create(createBrandDto: CreateBrandDto): Promise<Brands>;
    findAll(): Promise<Brands[]>;
    findOne(id: string): Promise<Brands>;
    update(id: string, updateBrandDto: UpdateBrandDto): Promise<void>;
    remove(id: string): Promise<void>;
}
