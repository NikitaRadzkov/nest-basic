import { FilesModule } from './../files/files.module';
import { User } from './../users/users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './post.model';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([User, Post]),
    FilesModule
  ]
})
export class PostsModule {}
