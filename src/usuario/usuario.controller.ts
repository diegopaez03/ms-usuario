import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioMSG } from 'src/common/constants';

@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @MessagePattern(UsuarioMSG.CREATE)
  create(@Payload() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @MessagePattern(UsuarioMSG.FIND_ALL)
  findAll() {
    return this.usuarioService.findAll();
  }

  @MessagePattern(UsuarioMSG.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.usuarioService.findOne(id);
  }

  @MessagePattern(UsuarioMSG.UPDATE)
  update(@Payload() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(updateUsuarioDto.id, updateUsuarioDto);
  }

  @MessagePattern(UsuarioMSG.DELETE)
  remove(@Payload() id: number) {
    return this.usuarioService.remove(id);
  }
}
