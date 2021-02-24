import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBooks1614185604517 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'books',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'ISBN',
            type: 'varchar',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestemp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('books');
  }
}
