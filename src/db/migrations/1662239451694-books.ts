import { MigrationInterface, QueryRunner } from "typeorm";

export class books1662239451694 implements MigrationInterface {
    name = 'books1662239451694'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book" ("id" character varying NOT NULL, "name" character varying(120), "description" text NOT NULL, "userId" character varying, CONSTRAINT "UQ_233978864a48c44d3fcafe01573" UNIQUE ("name"), CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "FK_04f66cf2a34f8efc5dcd9803693" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "FK_04f66cf2a34f8efc5dcd9803693"`);
        await queryRunner.query(`DROP TABLE "book"`);
    }

}
