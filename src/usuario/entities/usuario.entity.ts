import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Telefono } from './telefono.entity';


@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 40 })
  nombre: string;
  @Column()
  correo: string;
  @Column({ length: 100 })
  hash: string;
  @Column({ length: 100, nullable: true })
  hashNuevo: string;
  @OneToMany(() => Telefono, (telefono) => telefono.usuario, {cascade: true})
  telefonos: Telefono[];
}
