import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(private msgsServ: MessagesService){}

    @Get()
    async listMessages() {
        return await this.msgsServ.findAll()
    }

    @Get("/:id")
    async getMessageByID(@Param("id") id: string) {
        return await this.msgsServ.findById(id)
    }

    @Post()
    async createMessage(@Body() body: CreateMessageDto) {
        return await this.msgsServ.create(body.content)
    }
}
