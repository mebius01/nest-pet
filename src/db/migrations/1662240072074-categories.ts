import { MigrationInterface, QueryRunner } from "typeorm";

export class categories1662240072074 implements MigrationInterface {
    name = 'categories1662240072074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" character varying NOT NULL, "name" character varying(120), "description" text NOT NULL, CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book_categories_categories" ("bookId" character varying NOT NULL, "categoriesId" character varying NOT NULL, CONSTRAINT "PK_0c6aa1b1210c65953d29b1f87b7" PRIMARY KEY ("bookId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4936c04a41376599bebf3cdc1a" ON "book_categories_categories" ("bookId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d840d6257c020fe38bcd3ee3a5" ON "book_categories_categories" ("categoriesId") `);
        await queryRunner.query(`ALTER TABLE "book_categories_categories" ADD CONSTRAINT "FK_4936c04a41376599bebf3cdc1a0" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "book_categories_categories" ADD CONSTRAINT "FK_d840d6257c020fe38bcd3ee3a57" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book_categories_categories" DROP CONSTRAINT "FK_d840d6257c020fe38bcd3ee3a57"`);
        await queryRunner.query(`ALTER TABLE "book_categories_categories" DROP CONSTRAINT "FK_4936c04a41376599bebf3cdc1a0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d840d6257c020fe38bcd3ee3a5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4936c04a41376599bebf3cdc1a"`);
        await queryRunner.query(`DROP TABLE "book_categories_categories"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
