import { Module } from '@nestjs/common';
import { Article } from 'src/entities/article.entity';
import { ArticleController } from 'src/controllers/article.controller';
import { ArticleService } from 'src/services/article.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
