import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {

  constructor(@InjectRepository(Car) private readonly repository: Repository<Car>){}

  create(createCarDto: CreateCarDto) {
    const car = this.repository.create(createCarDto);
    return this.repository.save(car);
  }

  findAll(): Promise<Car[]>{
    return this.repository.find();
  }

  findOne(id: string): Promise<Car> {
    return this.repository.findOneBy({id: id});
  }

  async update(id: string, updateCarDto: UpdateCarDto): Promise<Car> {
    const car = await this.repository.preload({
      id: id,
      ...updateCarDto,
    });
    if (!car) {
      throw new NotFoundException('Item ${id} not found');
    } 
    return this.repository.save(car)
  }

  async remove(id: string) {
    const car = await this.findOne(id);
    return this.repository.remove(car);
  }
}
