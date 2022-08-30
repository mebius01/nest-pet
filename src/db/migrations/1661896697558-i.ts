import { MigrationInterface, QueryRunner } from "typeorm";

export class i1661896697558 implements MigrationInterface {
    name = 'i1661896697558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(120) NOT NULL, "email" character varying(120) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" text NOT NULL, "userId" integer, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "book_authors_author" ("bookId" integer NOT NULL, "authorId" integer NOT NULL, CONSTRAINT "PK_963de00068693ab6e5767de614b" PRIMARY KEY ("bookId", "authorId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9bf58ffb2a12a8609a738ee8ca" ON "book_authors_author" ("bookId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a4cafdf2ec9974524a5321c751" ON "book_authors_author" ("authorId") `);
        await queryRunner.query(`CREATE TABLE "book_categories_categories" ("bookId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "PK_0c6aa1b1210c65953d29b1f87b7" PRIMARY KEY ("bookId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4936c04a41376599bebf3cdc1a" ON "book_categories_categories" ("bookId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d840d6257c020fe38bcd3ee3a5" ON "book_categories_categories" ("categoriesId") `);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "FK_04f66cf2a34f8efc5dcd9803693" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD CONSTRAINT "FK_9bf58ffb2a12a8609a738ee8cae" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD CONSTRAINT "FK_a4cafdf2ec9974524a5321c7516" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "book_categories_categories" ADD CONSTRAINT "FK_4936c04a41376599bebf3cdc1a0" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "book_categories_categories" ADD CONSTRAINT "FK_d840d6257c020fe38bcd3ee3a57" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book_categories_categories" DROP CONSTRAINT "FK_d840d6257c020fe38bcd3ee3a57"`);
        await queryRunner.query(`ALTER TABLE "book_categories_categories" DROP CONSTRAINT "FK_4936c04a41376599bebf3cdc1a0"`);
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP CONSTRAINT "FK_a4cafdf2ec9974524a5321c7516"`);
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP CONSTRAINT "FK_9bf58ffb2a12a8609a738ee8cae"`);
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "FK_04f66cf2a34f8efc5dcd9803693"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d840d6257c020fe38bcd3ee3a5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4936c04a41376599bebf3cdc1a"`);
        await queryRunner.query(`DROP TABLE "book_categories_categories"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a4cafdf2ec9974524a5321c751"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9bf58ffb2a12a8609a738ee8ca"`);
        await queryRunner.query(`DROP TABLE "book_authors_author"`);
        await queryRunner.query(`DROP TABLE "book"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "author"`);
    }

}
