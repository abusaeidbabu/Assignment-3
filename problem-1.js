/*function signature/sample */
function newPrice(currentPrice , discount ) { 
        if(typeof currentPrice==="number"&&typeof discount==="number"&&discount>0&&discount<=100){
          let price =currentPrice-(currentPrice*discount)/100;
          return price.toFixed(3);
        }
        else{
            return "Invalid";
        }
}
const output= newPrice(500, "5");
console.log(output);
