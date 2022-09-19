import { ApiProperty } from "@nestjs/swagger"
import { IsString, Length, IsEmail } from 'class-validator'

export class CreateUserDto {
    @ApiProperty({example: 'test@mail.com', description: 'Email'})
    @IsString({message: 'Should be string'})
    @IsEmail({}, {message: 'Wrong password'})
    readonly email: string

    @ApiProperty({example: 'test1234', description: 'Password'})
    @Length(4 ,16, {message: "Min length 4 symbols"})
    readonly password: string
}