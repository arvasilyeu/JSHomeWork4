async function sengRequest() {
    const request = 'http://api.exchangeratesapi.io/v1/latest?access_key=db8470e815cd38734d2d63486fd3ebfc'
    let result = await fetch(request, { method: 'GET' })
    return result.json()
}

async function currencyConvertor(currencyToExchange, amount, baseCurrency) {
    let res = await sengRequest()
    let exchangeRate = res.rates[currencyToExchange] / res.rates[baseCurrency]
    let result = amount / exchangeRate
    console.log(`Exchange result ${amount} ${currencyToExchange} to ${baseCurrency} is: ${result.toFixed(2)}`)
}

currencyConvertor('BYN', 40, 'USD')
// currencyConvertor('USD', 40, 'EUR')