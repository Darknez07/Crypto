const cryptoAPI = new cryptAPI();
const ui = new UI();

//Create form variables

const form = document.getElementById('form');

form.addEventListener('submit',(data)=>{
    data.preventDefault();
    const currency = document.getElementById('currency').value;
    //Read cryptocurrency
    const cryptocurrency = document.getElementById('cryptocurrency').value;
    console.log(currency+' : '+cryptocurrency);
    //Validate the form
    if(currency === ''|| cryptocurrency === ''){
        //display an error
        ui.printMessage('All fields are required!!','deep-orange darken-4 card-panel');
    }else{
       cryptoAPI.currencySelect(currency,cryptocurrency)
       .then(data => {
           
           if(currency === 'USD'){
               data.result[0].price_usd*=1;
               data.result[0].market_cap_usd*=1;
               data.result[0].percent_change_1h=parseFloat(data.result[0].percent_change_1h);
               data.result[0].percent_change_1h= data.result[0].price_usd*((100 + data.result[0].percent_change_1h)/(100));
               data.result[0].percent_change_7d=parseFloat(data.result[0].percent_change_7d);
               data.result[0].percent_change_7d= data.result[0].price_usd*((100 + data.result[0].percent_change_7d)/(100));
           } 
           if(currency === 'EUR'){
               data.result[0].price_usd*=0.91;
               data.result[0].market_cap_usd*=0.91;
               data.result[0].percent_change_1h=parseFloat(data.result[0].percent_change_1h);
               data.result[0].percent_change_1h= data.result[0].price_usd*((100 + data.result[0].percent_change_1h)/(100));
               data.result[0].percent_change_7d=parseFloat(data.result[0].percent_change_7d);
               data.result[0].percent_change_7d= data.result[0].price_usd*((100 + data.result[0].percent_change_7d)/(100));           
            }
            if(currency === 'INR'){
                data.result[0].price_usd*=71.79;
                data.result[0].market_cap_usd*=71.79;
                data.result[0].percent_change_1h=parseFloat(data.result[0].percent_change_1h);
                data.result[0].percent_change_1h= data.result[0].price_usd*((100 + data.result[0].percent_change_1h)/(100));
                data.result[0].percent_change_7d=parseFloat(data.result[0].percent_change_7d);
               data.result[0].percent_change_7d= data.result[0].price_usd*((100 + data.result[0].percent_change_7d)/(100));
            }
            ui.displayResult(data.result[0],currency)
        })
    }
})