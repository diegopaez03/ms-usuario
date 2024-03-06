import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(@InjectRepository(Usuario)private UsuarioRepository: Repository<Usuario> ){}
 
  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.UsuarioRepository.create(createUsuarioDto);
    return this.UsuarioRepository.save(usuario)
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  async findOne(id: number) {
    return await this.UsuarioRepository.findOneBy({id})
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
