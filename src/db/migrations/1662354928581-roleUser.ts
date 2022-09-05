import { MigrationInterface, QueryRunner } from 'typeorm';

export class roleUser1662354928581 implements MigrationInterface {
  name = 'roleUser1662354928581';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" ADD "roleId" integer`);
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "UQ_368e146b785b574f42ae9e53d5e" UNIQUE ("roleId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD CONSTRAINT "FK_368e146b785b574f42ae9e53d5e" FOREIGN KEY ("roleId") REFERENCES "rols"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "FK_368e146b785b574f42ae9e53d5e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" DROP CONSTRAINT "UQ_368e146b785b574f42ae9e53d5e"`,
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "roleId"`);
  }
}
