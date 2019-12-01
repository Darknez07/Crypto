class UI{
    constructor(){
        this.init();
    }
    init(){
        this.printCrpytoCurrencies();
    }
    printCrpytoCurrencies(){
        cryptoAPI.getCryptoCurrencies()
        .then(data => {
            const crypt = data.response.data;
            //Select for REST API
            const  select = document.getElementById('cryptocurrency');
            for(let i=0;i<100;i++){
                //Create options
                const option = document.createElement('option');
                option.value = Number(crypt[i].id);
                //Keep inserting
                option.appendChild(document.createTextNode(crypt[i].name));
                select.appendChild(option); 
            }
        })
        .catch(err => console.log(err));
    }
    //Prints the message
    printMessage(message,classname){
        const div = document.createElement('div');
        //Add classes
        div.className = classname;
        //Add a message
        div.appendChild(document.createTextNode(message));

        const messageDiv = document.querySelector('.messages');
        //A function for validating and removing
        messageDiv.appendChild(div);

        setTimeout(()=>{
            document.querySelector('.messages div').remove();
        },3000);
    }
    displayResult(result,curr){
        //Remove previous result
        const prevresult = document.querySelector('#result > div');
        if(prevresult){
            prevresult.remove();
        }
        let html ='';
        html+='<div class="card cyan darken-3"> <div class="card-content white-text"> <span class="card-title"> Result</span><p> Price of '+result.name+' is '+result.price_usd+' '+curr+'</p>'+
        '<p> Market rank is :'+result.rank+'<p>Market Captial: '+result.market_cap_usd+' '+curr+
        '<p> Last Hour Price was : '+result.percent_change_1h+' '+curr+
        '<p> Last week Price was : '+result.percent_change_7d+' '+curr+
        '<p> Current Supply in Market is : '+result.tsupply+'</p></div></div>';
        //Prints spinner

        this.showSpinner();


        setTimeout(() => {
            const divResult = document.querySelector('#result');
            divResult.innerHTML = html;
            //Hide spinner
            document.querySelector('.spinner img').remove();
        },3000);
        console.log(result);
    }
   //Spinner
   showSpinner(){
       const spinnerGIF = document.createElement('img');
       spinnerGIF.src = 'img/spinner.gif';
       document.querySelector('.spinner').appendChild(spinnerGIF);


   } 
}