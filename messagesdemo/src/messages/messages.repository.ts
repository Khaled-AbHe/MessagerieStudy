import { Injectable } from "@nestjs/common";
import { writeFile, readFile } from "fs/promises";

@Injectable() // DO NOT FORGET TO ADD THIS MAKE MAKING A REPO
export class MessagesRepository {
    
    async findAll() {
        const content = await readFile("messages.json", "utf-8");
        const messages = JSON.parse(content)
        return messages

        // return JSON.parse(await readFile("messages.json", "utf-8"))
    }

    async findById(id: string){
        const content = await readFile("messages.json", "utf-8");
        const messages = JSON.parse(content)

        return messages[id]
    }

    async create(message : string) {
        const content = await readFile("messages.json", "utf-8");
        const messages = JSON.parse(content)

        // const id = Math.floor((Math.random() * 99) + 3)
        const id = ++(Object.keys(messages).length) // Found Online: https://www.servicenow.com/community/developer-forum/how-to-get-the-size-of-the-request-body-of-scripted-rest-api/m-p/1633692#:~:text=If%20your%20body%20is%20in%20JSON%20format,,pairs%20in%20that%20with%20below%20sample%20script.
        messages[id] = {id, content: message}

        await writeFile("messages.json", JSON.stringify(messages))

        return `Message ${id}: ${message}`
    }
}