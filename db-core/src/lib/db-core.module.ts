import { Module } from '@nestjs/common';
import { dbProviders } from './providers/db.providers';

@Module({
  controllers: [],
  providers: [...dbProviders],
  exports: [...dbProviders],
})
export class DbCoreModule {}
