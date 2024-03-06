import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Usuario } from './usuario/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telefono } from './usuario/entities/telefono.entity';
import { RabbitMQ } from './common/constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      port: parseInt(process.env.DATABASE_PORT, 10),
      entities: [Usuario, Telefono],
      synchronize: true,
    }),
    UsuarioModule,
    ClientsModule.register([
      {
        name: 'Usuario',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.AMQP_URL],
          queue: RabbitMQ.UsuarioQueue,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
