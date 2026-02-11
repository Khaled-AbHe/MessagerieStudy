import { Injectable, NotFoundException } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';


@Injectable()
export class MessagesService {

    constructor(private msgsRepo : MessagesRepository){}

    async findAll(){ // always put async when you use await
        return await this.msgsRepo.findAll()
    }

    async findById(id: string){
        const msg = await this.msgsRepo.findById(id)
        
        if (!msg) { // On fait la gestion d'erreur dans le service
            throw new NotFoundException("Message non-trouvé")
        } 

        return msg 
    }

    async create(msg: string){
        return await this.msgsRepo.create(msg)
    }

}
