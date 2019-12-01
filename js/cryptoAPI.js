class cryptAPI{
    //Query when success for Api
   async currencySelect(currncy,cypcr){
        const url = await fetch('https://api.coinlore.com/api/ticker/?id='+cypcr);
        const result = await url.json();
        return{
            result
        }
    }
    async getCryptoCurrencies(){
        const url = await fetch('https://api.coinlore.com/api/tickers/?limit=200');
        const response =  await url.json();
        return {response}
    }
}