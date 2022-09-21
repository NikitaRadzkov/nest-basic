import { Post } from './../posts/post.model';
import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";

interface UserCreationAttrs {
  email: string,
  password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({example: '1', description: 'Unique identifier'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number

  @ApiProperty({example: 'test@mail.com', description: 'Email'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  email: string


  @ApiProperty({example: 'test1234', description: 'Password'})
  @Column({type: DataType.STRING, allowNull: false})
  password: string


  @ApiProperty({example: 'true', description: 'Banned or not'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean


  @ApiProperty({example: 'Flood', description: 'Why the user was blocked'})
  @Column({type: DataType.STRING, allowNull:true})
  banReason: string

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]

  @HasMany(() => Post)
  posts: Post[]
}
