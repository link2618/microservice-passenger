import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PassengerMSG } from 'src/common/constants';

import { PassangerDTO } from './dto/passanger.dto'
import { PassangerService } from './passanger.service';

@Controller()
export class PassangerController {

    constructor(private readonly passangerService: PassangerService) {}

    @MessagePattern(PassengerMSG.CREATE)
    create(@Payload() passangerDTO: PassangerDTO) {
        return this.passangerService.create(passangerDTO)
    }

    @MessagePattern(PassengerMSG.FIND_ALL)
    findAll() {
        return this.passangerService.findAll()
    }

    @MessagePattern(PassengerMSG.FIND_ONE)
    findOne(@Payload() id: string) {
        return this.passangerService.findOne(id)
    }

    @MessagePattern(PassengerMSG.UPDATE)
    update(@Payload() payload: any) {
        return this.passangerService.update(payload.id, payload.passangerDTO)
    }

    @MessagePattern(PassengerMSG.DELETE)
    delete(@Payload() id: string) {
        return this.passangerService.delete(id)
    }
}
