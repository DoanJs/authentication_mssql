import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_ID' })
  @Field()
  ID: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  username: string;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  password: string;
}
