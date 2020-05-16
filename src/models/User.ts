import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Role } from "./Role"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  password: string

  @Column({ default: true })
  isActive: boolean

  @ManyToMany((type) => Role, (role) => role.users, {
    cascade: true,
  })
  @JoinTable()
  roles: Role[]
}
