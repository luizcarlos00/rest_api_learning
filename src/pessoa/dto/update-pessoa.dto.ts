import { PartialType } from '@nestjs/mapped-types';
import { CreatePessoaDto } from './create-pessoa.dto';
import { IsInt, IsOptional, IsPositive, IsString, Max, Min } from 'class-validator';

export class UpdatePessoaDto extends PartialType(CreatePessoaDto) {
	@IsOptional()
	@IsString()
	nome?: string;

	@IsOptional()
	@IsInt()
	@IsPositive()
	@Min(0)
	@Max(120)
	idade?: number;
}
