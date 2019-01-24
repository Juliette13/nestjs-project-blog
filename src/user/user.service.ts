import { Inject, Injectable } from "@nestjs/common";
import { User } from "./interfaces/user.interface";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository
  ) {}

  async create(user: User) {
    return this.userRepository.save(user);
  }

  // if admin
  async deleteUser(id: number) {
    this.userRepository.delete(id);
  }

  /**
   * Returns all user
   *
   * @returns Resolves with User
   */
  async getAll() {
    return this.userRepository.find();
  }

  async getByEmail(email: string) {
    return this.userRepository.findOne({"email" : email});
  }

  /**
   * Returns a user identified by its id
   *
   * @param id - user id
   * @returns Resolves with User
   */
  async getById(id: number) {
    return this.userRepository.findOne(id);
  }

  /**
   * Update user
   * Return user by its id
   *
   * @param id, user
   * @returns Resolves with User
   */
  async updateUser(id: number, user: Partial<User>) {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne(id);
  }
}
