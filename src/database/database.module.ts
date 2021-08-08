import { Module } from '@nestjs/common';
import { DatabaseController } from './controllers/database.controller';
import { DatabaseService } from './services/database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import config from '../config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        inject: [config.KEY],
        useFactory: ( configService: ConfigType<typeof config> ) => {
            return {
                type: 'postgres',
                url: configService.uri,
                autoLoadEntities: true,
                synchronize: true,
            }
        }
  })],
  controllers: [DatabaseController],
  providers: [DatabaseService]
})
export class DatabaseModule {}
