import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  imports: [], // This is where you import other modules into this one
  exports: [], // This is where you export this module's services, only the services you write here will be accessible to other modules that import this one
  providers: [MessagesService, MessagesRepository] // This allows "classes" of the same module to be accessable to each other

})
export class MessagesModule {}
