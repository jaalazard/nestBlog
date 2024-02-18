import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { ArticleModule } from './modules/article.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './modules/users.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      useFactory: () => databaseConfig,
    }),
    ArticleModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule {}
