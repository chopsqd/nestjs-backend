import {IsNumber, IsString} from "class-validator";

export class AddRoleDto {
    @IsString({message: 'Значение должно быть строкой'})
    readonly value: string

    @IsNumber({}, {message: 'Значение должно быть числом'})
    readonly userId: number
}