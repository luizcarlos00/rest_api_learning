import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(Pessoa)
    private readonly pessoaRepository: Repository<Pessoa>,
  ) {}


  async create(createPessoaDto: CreatePessoaDto): Promise<Pessoa> {
    try {
      const novaPessoa = this.pessoaRepository.create(createPessoaDto);
        
      return this.pessoaRepository.save(novaPessoa);
    } catch (err: any) {
      throw new InternalServerErrorException('Erro ao criar pessoa', {
        description: err?.message,
      });
    }
  }

  async findAll(): Promise<Pessoa[]> {
    return this.pessoaRepository.find();
  }

  async findOne(id: number) {
    return this.pessoaRepository.findOneBy({id});
  }

  async update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return this.pessoaRepository.update(id,updatePessoaDto);
  }

  async remove(id: number) {
    return this.pessoaRepository.delete(id);
  }
}

