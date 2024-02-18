import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: number): Promise<User[]> {
    return await this.usersRepository.find({
      // Je ne veux pas retouner le MDP
      select: ['firstname', 'lastname', 'email'],
      where: [{ id: id }],
    });
  }

  async getUserByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOneBy({ email: email });
  }

  saveUser(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async updateUser(id: number, user: User): Promise<void> {
    await this.usersRepository.update(id, user);
  }

  deleteUser(user: User): void {
    this.usersRepository.delete(user);
  }
}
