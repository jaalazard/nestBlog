import { ArticleService } from 'src/services/article.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Article } from 'src/entities/article.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  getArticles() {
    return this.articleService.getArticles();
  }

  @Get(':id')
  getArticleById(@Param('id') id: string) {
    return this.articleService.getArticle(parseInt(id));
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  saveArticle(@Body() article: Article) {
    return this.articleService.saveArticle(article);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  updateArticle(@Param('id') id: number, @Body() article: Article) {
    return this.articleService.updateArticle(id, article);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteArticle(@Param() params) {
    return this.articleService.deleteArticle(params.id);
  }
}
