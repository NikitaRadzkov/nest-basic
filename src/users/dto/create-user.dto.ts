import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({example: 'test@mail.com', description: 'Email'})
    readonly email: string

    @ApiProperty({example: 'test1234', description: 'Password'})
    readonly password: string
}