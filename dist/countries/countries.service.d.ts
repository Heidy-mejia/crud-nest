import { Repository } from 'typeorm';
import { Countries } from './entities/country.entity';
import { UpdateCountryDto } from './dto/update-country.dto';
import { CreateCountryDto } from './dto/create-country.dto';
export declare class CountriesService {
    private countriesRepository;
    constructor(countriesRepository: Repository<Countries>);
    update(id: string, updateCountryDto: UpdateCountryDto): Promise<import("typeorm").UpdateResult>;
    create(createCountryDto: CreateCountryDto): Promise<CreateCountryDto & Countries>;
    findAll(): Promise<Countries[]>;
    findOne(id: string): Promise<Countries | null>;
    remove(id: string): Promise<void>;
}
