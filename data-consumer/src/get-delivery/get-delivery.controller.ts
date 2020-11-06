import { Controller, Get } from '@nestjs/common';
import { functionImports } from 'odata-client/catalog-service';


@Controller('get-delivery')
export class GetDeliveryController {
    @Get()
    getDeliveryInfo() {
        return new Promise((resolve, reject) => {
            functionImports.getDeliveryDate({})
            .execute({
                url: 'http://localhost:4004'                
            })
            .then(res => {
                resolve('Function call successful: ' + JSON.stringify(res))
            })
            .catch(error => {
                resolve('Error ocurred: ' + JSON.stringify(error))
            })
        })
    }
}
