import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/entities/article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private ArticleRepository: Repository<Article>,
  ) {}

  async getArticles(): Promise<Article[]> {
    return await this.ArticleRepository.find();
  }

  async getArticle(id: number): Promise<Article[]> {
    return await this.ArticleRepository.find({
      select: ['title', 'content', 'author', 'creationDate'],
      where: [{ id: id }],
    });
  }

  saveArticle(article: Article): Promise<Article> {
    return this.ArticleRepository.save(article);
  }

  async updateArticle(id: number, article: Article): Promise<void> {
    await this.ArticleRepository.update(id, article);
  }

  deleteArticle(article: Article): void {
    this.ArticleRepository.delete(article);
  }
}
