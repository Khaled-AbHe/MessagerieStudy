import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
    createMessage(@Body() body: any) {
        return `Message created: ${body.content}`
    }
}
