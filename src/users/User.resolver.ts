import { Query, Resolver } from '@nestjs/graphql';
import { User } from './User.model';
import { UsersService } from './User.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  users(): Promise<User[]> {
    return this.usersService.users();
  }
}
