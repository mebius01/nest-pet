import { MigrationInterface, QueryRunner } from 'typeorm';

export class roleUser1662372821008 implements MigrationInterface {
  name = 'roleUser1662372821008';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users_rols" ("id" SERIAL NOT NULL, "role" character varying NOT NULL DEFAULT 'user', CONSTRAINT "PK_1e87c5b39a64eb63a88c26fa53e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "users" ADD "role_id" integer`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "UQ_a2cecd1a3531c0b041e29ba46e1" UNIQUE ("role_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY ("role_id") REFERENCES "users_rols"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );

    await queryRunner.query(`insert into users_rols ("role") values('admin')`);
    await queryRunner.query(`insert into users_rols ("role") values('user')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "UQ_a2cecd1a3531c0b041e29ba46e1"`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role_id"`);
    await queryRunner.query(`DROP TABLE "users_rols"`);
  }
}
