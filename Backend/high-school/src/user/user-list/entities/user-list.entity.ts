import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  Email: string;
  @Column()
  phone: string;
  @Column()
  userType: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  confirmPassword: string;
}
