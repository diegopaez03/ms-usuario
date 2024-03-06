import { IsString } from "class-validator";

export class CreateTelefonoDto {
    @IsString()
    numero: string;
}