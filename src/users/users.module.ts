import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { Module } from "@nestjs/common";
import { UsersService } from './users.service';
import { User } from './users.model';
import { UserRoles } from '../roles/user-roles.model';
import { Role } from '../roles/roles.model';
import { RolesModule } from '../roles/roles.module';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles]),
        RolesModule
    ],
    exports: [UsersService]
})
export class UsersModule {}