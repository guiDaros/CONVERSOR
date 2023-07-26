const currencyConverter = document.querySelector('.currency-box')
const convertButton = document.querySelector('.convert-button')

function converter(){
    const inputCurrency = document.querySelector('#input-currency').value
    const currencyValue = document.querySelector('.currency-value')
    const currencySelector = document.querySelector('.currency-box')


    if(currencySelector == 'dolar'){
        currencyValue.innerHTML = new Intl.NumberFormat ('pt-BR',{style:'currency', currency:'USD'}).format(inputCurrency / 5)
    }
    
}

 

currencyConverter.addEventListener('change', )
convertButton.addEventListener('click', converter) 


