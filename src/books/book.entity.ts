import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('books')
class Book {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  ISBN: string;

  @Column()
  title: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Book };
