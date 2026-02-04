import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {

    @Get()
    listMessages() {
        return "List of messages"
    }

    @Get("/:id")
    getMessageByID(@Param("id") id: string) {
        return `The ID of this message is: ${id}`
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return `Message created: ${body.content}`
    }
}
