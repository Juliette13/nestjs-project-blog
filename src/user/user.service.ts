import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './interfaces/user.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

  constructor(@Inject(UserRepository) private readonly userRepository: UserRepository) {}

  create(user: User) {
    this.userRepository.save(user);
  }

  /**
   * Returns a user identified by its id
   *
   * @param id - user id
   * @returns Resolves with User
  **/
  async getById(id: number) {
    return this.userRepository.findOne(id);
  }

  async deleteUser(id: number) {
    this.userRepository.delete(id);
  }

  async updateUser(id: number, user: Partial<User>) {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne(id);
  }

  async authenticate(user: Partial<User>){
    return this.userRepository.find({
      email: user.email,
      password: user.password
    }
   )
  }

}
