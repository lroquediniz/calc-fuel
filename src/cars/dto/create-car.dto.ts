import { IsInt, IsNotEmpty, IsString} from 'class-validator';


export class CreateCarDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsInt()
    @IsNotEmpty()
    kml: number;

    @IsInt()
    @IsNotEmpty()
    year: number;

    @IsString()
    @IsNotEmpty()
    brand: string;
}
