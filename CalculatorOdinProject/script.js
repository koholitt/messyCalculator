const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');

let firstValue = null;
let symbol = "";
let secondValue = null;

buttons.forEach(btn =>{
    btn.addEventListener('click', e =>{
        if(isNaN(btn.textContent)){

            if((btn.textContent == "=") && (firstValue != null) && (symbol != "")){
                if(!isNaN(input.value)){
                    secondValue = parseInt(input.value);
                    input.value = checkResult(firstValue,secondValue,symbol)
                }
                else{
                    input.value = firstValue;
                }
            }
            else if((symbol != "") && (firstValue != null)){
                secondValue = parseInt(input.value);
                firstValue = checkResult(firstValue,secondValue,symbol);
                input.value = btn.textContent;
                console.log(`first: ${firstValue}, second: ${secondValue}`);
            }
            else{
                if(!isNaN(input.value)){
                    firstValue = parseInt(input.value);
                    console.log(`secon else: ${firstValue}`);
                }
                input.value = btn.textContent;
                symbol = input.value;
                console.log(`symbol: ${symbol}`);
            } 
        }
        else{
            if(isNaN(input.value)){
                input.value = "";
                input.value = btn.textContent;
            }
            else{
                input.value += btn.textContent;
            }
        }
    });
})


function checkResult(value1, value2, symbol){
    switch(symbol){
        case "+" :
           return value1 + value2; 
            break;
        case "-":
            return value1 - value2;
            break;
        case "/":
            return value1 / value2;
            break;
        case "x":
            return value1 * value2;
            break;
        default:
            console.log('ERROR');
    }
}