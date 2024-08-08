import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CBCS } from './CBCS.model';

@Injectable()
export class CBCSsService {
  constructor(
    @InjectRepository(CBCS) private cbcsRepository: Repository<CBCS>,
  ) {}

  cbcss(): Promise<CBCS[]> {
    return this.cbcsRepository.query('select * from CBCSs');
  }
}
