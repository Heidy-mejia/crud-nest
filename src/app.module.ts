import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';

import { CountriesModule } from './countries/countries.module';
import { BrandsModule } from './brands/brands.module';
import { SexsModule } from './sexs/sexs.module';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'ecomerce-ng',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MenuModule,
    CategoriesModule,
    CountriesModule,
    BrandsModule,
    SexsModule,
    
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
