import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1760579203425 implements MigrationInterface {
    name = 'InitialSchema1760579203425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pessoa" ("id" SERIAL NOT NULL, "age" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_bb879ac36994545a5a917a09ba5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "pessoa"`);
    }

}
