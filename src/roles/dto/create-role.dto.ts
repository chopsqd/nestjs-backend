import {IsNotEmpty, IsString} from "class-validator";

export class CreateRoleDto {
    @IsString({message: 'Значение должно быть строкой'})
    @IsNotEmpty({message: 'Укажите роль пользователя'})
    readonly value: string

    @IsString({message: 'Значение должно быть строкой'})
    @IsNotEmpty({message: 'Укажите описание роли'})
    readonly description: string
}