import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Countries } from './entities/country.entity';
import { CountriesService } from './countries.service';
export declare class CountriesController {
    private readonly countriesService;
    constructor(countriesService: CountriesService);
    create(createCountryDtoenu: CreateCountryDto): Promise<Countries>;
    findAll(): Promise<Countries[]>;
    findOne(id: string): Promise<Countries>;
    update(id: string, updateCountryDto: UpdateCountryDto): Promise<void>;
    remove(id: string): Promise<void>;
}
