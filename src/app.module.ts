import { Module } from '@nestjs/common';
import { TodoClientModule } from './todo-client/todo-client.module';

@Module({
  imports: [TodoClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
