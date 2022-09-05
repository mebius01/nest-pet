import { MigrationInterface, QueryRunner } from 'typeorm';

export class roleUser1662355570925 implements MigrationInterface {
  name = 'roleUser1662355570925';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_368e146b785b574f42ae9e53d5e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "roleId" TO "role_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" RENAME CONSTRAINT "UQ_368e146b785b574f42ae9e53d5e" TO "UQ_a2cecd1a3531c0b041e29ba46e1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY ("role_id") REFERENCES "rols"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" RENAME CONSTRAINT "UQ_a2cecd1a3531c0b041e29ba46e1" TO "UQ_368e146b785b574f42ae9e53d5e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "role_id" TO "roleId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_368e146b785b574f42ae9e53d5e" FOREIGN KEY ("roleId") REFERENCES "rols"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
