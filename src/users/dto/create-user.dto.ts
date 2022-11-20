import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.com', description: 'Почтовый адрес'})
    @IsString({message: 'Email должен быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly email: string
    
    @ApiProperty({example: '123456', description: 'Пароль'})
    @IsString({message: 'Пароль должен быть строкой'})
    @Length(4, 16, {message: 'Длина пароля от 4 до 16 символов'})
    readonly password: string
}