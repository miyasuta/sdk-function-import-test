const cds = require('@sap/cds')
module.exports = async function (){
    this.on('getDeliveryDate', (req)=> {
        const deliveryInfo = {
            deliveryDate: '2020-11-06'
        }
        return deliveryInfo
    })

}