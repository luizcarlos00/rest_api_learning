import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PessoaService {
  constructor(private prisma: PrismaService) {}

  async create(createPessoaDto: CreatePessoaDto) {
    try {
      return await this.prisma.pessoa.create({
        data: createPessoaDto,
      });
    } catch (err: any) {
      throw new InternalServerErrorException('Erro ao criar pessoa', {
        description: err?.message,
      });
    }
  }

  findAll() {
    return this.prisma.pessoa.findMany();
  }

  findOne(id: number) {
    return this.prisma.pessoa.findUnique({ where: { id } });
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return this.prisma.pessoa.update({
      where: { id },
      data: updatePessoaDto,
    });
  }

  remove(id: number) {
    return this.prisma.pessoa.delete({ where: { id } });
  }
}

