import { SharedModule } from './../shared/shared.module';
import { Module } from '@nestjs/common';
import { TodoClientController } from './todo-client.controller';
import { TodoClientService } from './todo-client.service';

@Module({
  imports: [SharedModule],
  controllers: [TodoClientController],
  providers: [TodoClientService],
})
export class TodoClientModule {}
