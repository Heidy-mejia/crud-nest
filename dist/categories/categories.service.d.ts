import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("typeorm").UpdateResult>;
    create(createCategoryDto: CreateCategoryDto): Promise<CreateCategoryDto & Category>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category | null>;
    remove(id: string): Promise<void>;
}
