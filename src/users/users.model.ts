import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";

interface UserCreationAttrs {
    email: string
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({example: 'user@mail.com', description: 'Почтовый адрес'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string

    @ApiProperty({example: '123456', description: 'Пароль'})
    @Column({ type: DataType.STRING, allowNull: false })
    password: string

    @ApiProperty({example: 'false', description: 'Забанен ли пользователь'})
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean

    @ApiProperty({example: 'Оскорбление пользователей', description: 'Причина блокировки'})
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}