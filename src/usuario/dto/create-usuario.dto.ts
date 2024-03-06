import { IsString } from "class-validator";
import { Type } from 'class-transformer';
import { CreateTelefonoDto } from "./create-telefono.dto";


export class CreateUsuarioDto {
    @IsString()
    readonly nombre:string;
    @IsString()
    readonly correo:string;
    @IsString()
    readonly hash:string;
    @IsString({ each: true })
    @Type(() => CreateTelefonoDto)
    telefonos: CreateTelefonoDto[];
}
