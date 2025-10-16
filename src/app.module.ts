// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from './typeorm.config'; // Importe a configuração
import { PessoaModule } from './pessoa/pessoa.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions), // Use a configuração importada
    // ...seus outros módulos
  PessoaModule],
})
export class AppModule {}