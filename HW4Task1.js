function currencyConvertor(currencyToExchange, amount, baseCurrency){
    // поскольку бесплатный план для api.exchangeratesapi.io не поддерживает запрос "convert",
    // пришлось расчитывать крос-курс
    let request = 'http://api.exchangeratesapi.io/v1/latest?access_key=db8470e815cd38734d2d63486fd3ebfc'

    fetch(request, { method: 'GET' })
        .then(response => { return response.json() })
        .then(json => {
            let exchangeRate = json.rates[currencyToExchange] / json.rates[baseCurrency]
            let result = amount / exchangeRate
            console.log(`Exchange result ${amount} ${currencyToExchange} to ${baseCurrency} is: ${result.toFixed(2)}`)
        })
        .catch(err => {
            throw new Error(err)
        })
        .finally(() => {
            console.log('The requerst is completed!')
        })    
}

currencyConvertor('BYN', 40, 'USD')
// currencyConvertor('USD', 40, 'EUR')