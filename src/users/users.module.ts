import { Post } from './../posts/post.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';
import { forwardRef, Module } from "@nestjs/common";
import { UsersService } from './users.service';
import { User } from './users.model';
import { UserRoles } from '../roles/user-roles.model';
import { Role } from '../roles/roles.model';
import { RolesModule } from '../roles/roles.module';
import { AuthModule } from '../auth/auth.module';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles, Post]),
        RolesModule,
        forwardRef(() => AuthModule)
    ],
    exports: [UsersService]
})
export class UsersModule {}