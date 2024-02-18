import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column({ length: 255 })
  content: string;

  @Column({ length: 80 })
  author: string;

  @Column()
  creationDate: Date;
}
