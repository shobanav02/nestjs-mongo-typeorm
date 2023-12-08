import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
  @ObjectIdColumn()
  id: number;

  @Column()
  first_name: string;

  @Column('text')
  last_name: string;

  @Column('text')
  email: string;
}
