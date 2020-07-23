const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'flights.json'), 'utf-8' ,(err, content) => {
    if(err){
        throw err
    }
    let fly = JSON.parse(content)
    fly.result.flights.map( item => {
        delete item.flightToken
        delete item.flight.carrier
        delete item.flight.servicesStatuses
        delete item.flight.exchange
        delete item.flight.seats
        delete item.flight.refund
        delete item.flight.price.totalFeeAndTaxes
        delete item.flight.price.rates
        delete item.flight.price.passengerPrices
        delete item.flight.price.totalFeeAndTaxes
    })

    delete fly.result.bestPrices
    

    fs.writeFile(path.join(__dirname, 'flights-clear.json'), JSON.stringify(fly) ,(err) => {
        if(err){
            throw err
        }
        console.log('Seccsfull')
    })
})

