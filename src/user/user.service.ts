import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './interfaces/user.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  create(user: User) {
    this.userRepository.save(user);
  }

  login(email: User, password: User) {

  }

  /*
   * Returns a user identified by its id
   *
   * @param id - user id
   * @returns Resolves with User

  async getById(id: string) {
    return this.userRepository.findOne(id);
  }*/

  findOne(id: number): User {
    return this.userRepository[id];
  }
}
