import { Query, Resolver } from '@nestjs/graphql';
import { CBCS } from './CBCS.model';
import { CBCSsService } from './CBCS.service';

@Resolver(() => CBCS)
export class CBCSsResolver {
  constructor(private cbcssService: CBCSsService) {}

  @Query(() => [CBCS])
  cbcss(): Promise<CBCS[]> {
    return this.cbcssService.cbcss();
  }
}
