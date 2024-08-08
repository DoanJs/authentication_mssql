import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CBCS } from './CBCS.model';
import { CBCSsResolver } from './CBCS.resolver';
import { CBCSsService } from './CBCS.service';

@Module({
  imports: [TypeOrmModule.forFeature([CBCS])],
  providers: [CBCSsResolver, CBCSsService],
})
export class CBCSsModule {}
