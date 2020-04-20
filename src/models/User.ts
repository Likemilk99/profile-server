import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm"
import {Role} from "./Role"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  password: string

  @Column()
  isActive: boolean

  @ManyToMany(type => Role, role => role.users, {
    cascade: true
})
  @JoinTable()
  roles: Role[]
}
