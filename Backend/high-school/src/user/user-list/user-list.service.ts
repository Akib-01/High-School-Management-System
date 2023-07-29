import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserListDto } from './dto/create-user-list.dto';
import { Users } from './entities/user-list.entity';

@Injectable()
export class UserListService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepo: Repository<Users>,
  ) {}
  async create(Dto: CreateUserListDto): Promise<Users> {
    const { ...Data } = Dto;

    const user = new Users();
    user.id = Data.id;
    user.name = Data.name;
    user.Email = Data.Email;
    user.phone = Data.phone;
    user.userType = Data.userType;
    user.username = Data.username;
    user.password = Data.password;
    user.confirmPassword = Data.confirmPassword;

    return await this.userRepo.save(user);
  }

  findAll(): Promise<Users[]> {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOneBy({ id });
  }

  async update(id: number, Dto: CreateUserListDto): Promise<Users> {
    const { ...Data } = Dto;

    const user = new Users();
    user.name = Data.name;
    user.Email = Data.Email;
    user.phone = Data.phone;
    user.userType = Data.userType;
    user.username = Data.username;
    user.password = Data.password;
    user.confirmPassword = Data.confirmPassword;

    return await this.userRepo.save(user);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
