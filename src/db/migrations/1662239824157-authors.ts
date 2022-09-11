import { MigrationInterface, QueryRunner } from 'typeorm';

const seedId: string[] = [
  'CT-123-123',
  'CT-123-124',
  'CT-123-125',
  'CT-123-126',
  'CT-123-127',
  'CT-123-128',
  'CT-123-129',
  'CT-123-131',
  'CT-123-132',
  'CT-123-133',
  'CT-123-134',
  'CT-123-135',
  'CT-123-136',
  'CT-123-137',
  'CT-123-138',
  'CT-123-139',
];

const seedName: string[] = [
  'Stanisław Lem',
  'Ursula K. Le Guin',
  'Frank Herbert',
  'Philip K. Dick',
  'H. G. Wells',
  'Ray Bradbury',
  'Jules Verne',
  'Robert A. Heinlein',
  'Arthur C. Clarke',
  'Isaac Asimov',
  'C. S. Lewis',
  'Kyotaro Nishimura',
  'Jin Yong',
  'Roald Dahl',
  'J. R. R. Tolkien',
  'Jirō Akagawa',
];

export class authors1662239824157 implements MigrationInterface {
  name = 'authors1662239824157';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "author" ("id" character varying NOT NULL, "name" character varying(120), CONSTRAINT "UQ_d3962fd11a54d87f927e84d1080" UNIQUE ("name"), CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "book_authors_author" ("bookId" character varying NOT NULL, "authorId" character varying NOT NULL, CONSTRAINT "PK_963de00068693ab6e5767de614b" PRIMARY KEY ("bookId", "authorId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9bf58ffb2a12a8609a738ee8ca" ON "book_authors_author" ("bookId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a4cafdf2ec9974524a5321c751" ON "book_authors_author" ("authorId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "book_authors_author" ADD CONSTRAINT "FK_9bf58ffb2a12a8609a738ee8cae" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "book_authors_author" ADD CONSTRAINT "FK_a4cafdf2ec9974524a5321c7516" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );

    // seed date for categories
    for (const id of seedId) {
      const index: number = seedId.indexOf(id);
      await queryRunner.query(
        `insert into author (id, "name")
        values('${id}', '${seedName[index]}')`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "book_authors_author" DROP CONSTRAINT "FK_a4cafdf2ec9974524a5321c7516"`,
    );
    await queryRunner.query(
      `ALTER TABLE "book_authors_author" DROP CONSTRAINT "FK_9bf58ffb2a12a8609a738ee8cae"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_a4cafdf2ec9974524a5321c751"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_9bf58ffb2a12a8609a738ee8ca"`,
    );
    await queryRunner.query(`DROP TABLE "book_authors_author"`);
    await queryRunner.query(`DROP TABLE "author"`);
  }
}
