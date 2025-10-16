import { IsInt, IsNotEmpty, IsPositive, IsString, Max, Min } from 'class-validator';

export class CreatePessoaDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsInt()
	@IsPositive()
	@Min(0)
	@Max(120)
	age: number;
}

