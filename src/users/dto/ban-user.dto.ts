import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class BanUserDto {
    @IsNumber({}, {message: 'Значение должно быть числом'})
    readonly userId: number

    @IsString({message: 'Значение должно быть строкой'})
    @IsNotEmpty({message: 'Укажите причину блокировки'})
    readonly banReason: string
}