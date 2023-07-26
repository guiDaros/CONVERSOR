const convertButton = document.querySelector('.convert-button')
const currencySelector = document.querySelector('.currency-box')

async function convertValues() {
     const inputCurrencyValue = document.querySelector('#input-currency').value
     const currencyValue2Convert = document.querySelector('.currency-value-to-convert') //valor em real
     const currencyValueConverted = document.querySelector('.currency-value')

     const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json());

     const dolar = data.USDBRL.high
     const euro = data.EURBRL.high
     const bitcoin = data.BTCBRL.high
     const libra = 5.5

     if (currencySelector.value == 'dolar') {
          currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputCurrencyValue / dolar)
     }
     if (currencySelector.value == 'euro') {
          currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputCurrencyValue / euro)
     }
     if (currencySelector.value == 'bitcoin') {
          currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BTC' }).format(inputCurrencyValue / bitcoin)
     }
     if (currencySelector.value == 'libra') {
          currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', { style: 'currency', currency: 'GBP' }).format(inputCurrencyValue / libra)
     }


     currencyValue2Convert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputCurrencyValue)

}

function changeCurrency() {
     const currencyName = document.getElementById('currency-name-id')
     const currencyIMG = document.querySelector('.currency-img')

     if (currencySelector.value == 'dolar') {
          currencyName.innerHTML = 'Dolar americano'
          currencyIMG.src = './images/eua.png'
     }

     if (currencySelector.value == 'euro') {
          currencyName.innerHTML = 'Euro'
          currencyIMG.src = './images/euro.png'
     }

     if (currencySelector.value == 'bitcoin') {
          currencyName.innerHTML = 'Bitcoin'
          currencyIMG.src = './images/bitcoin.png'
     }

     if (currencySelector.value == 'libra') {
          currencyName.innerHTML = 'Libra'
          currencyIMG.src = './images/libra.png'
     }

     convertValues()

}

currencySelector.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)




//querySelector (. para class, # para ID)


