import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'CBCSs' })
@ObjectType()
export class CBCS {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'PK_MaCBCS' })
  @Field()
  MaCBCS: number;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  HoTen: string;

  @Column({ type: 'nvarchar', length: 50, nullable: true })
  @Field({ nullable: true })
  QueQuan: string;
}
