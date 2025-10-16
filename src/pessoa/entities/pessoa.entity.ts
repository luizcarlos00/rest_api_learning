import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()

export class Pessoa {


@PrimaryGeneratedColumn()
id: number;

@Column({nullable: false})
age: number;

@Column({nullable: false})
name: string;

















}

