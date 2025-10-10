import { IsInt, IsNotEmpty, IsPositive, IsString, Max, MAX, Min } from 'class-validator';

export class CreatePessoaDto {
	@IsString()
	@IsNotEmpty()
	nome: string;

	@IsInt()
	@IsPositive()
	@Min(0)
	@Max(120)
	idade: number;
}
