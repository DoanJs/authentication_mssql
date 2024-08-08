import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CBCSsModule } from './cbcss/CBCS.module';
import { UsersModule } from './users/User.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'user',
      password: 'user',
      database: 'CONNECTOR_MSSQL',
      autoLoadEntities: true,
      logging: true,
      // synchronize: true, ///not use production env
      options: {
        trustServerCertificate: true,
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UsersModule,
    CBCSsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
