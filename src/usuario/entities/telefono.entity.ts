import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";

@Entity()
export class Telefono {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    numero:string;
    
    @ManyToOne(() => Usuario, usuario => usuario.telefonos)
    usuario: Usuario;
}