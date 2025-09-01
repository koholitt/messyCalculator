const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');

let firstValue = null;
let symbol = "";
let secondValue = null;
let total = null;

buttons.forEach(btn =>{
    btn.addEventListener('click', e =>{
        if(isNaN(btn.textContent)){
            if(btn.textContent == "C"){
                 firstValue = null;
                 symbol = "";
                 secondValue = null;

                input.value = "";

            }
            else if((btn.textContent == "=") && (firstValue != null) && (symbol != "")){
                if(!isNaN(input.value)){
                    secondValue = parseInt(input.value);
                    input.value = checkResult(firstValue,secondValue,symbol)
                }
                else{
                    input.value = total;
                }
            }
            else if((symbol != "") && (firstValue != null)){
                secondValue = parseInt(input.value);
                input.value = btn.textContent;
                total = checkResult(firstValue,secondValue,symbol);
                symbol = input.value;
                input.value = btn.textContent;
            }
            else{
                if(!isNaN(input.value) && (total == null)){
                    firstValue = parseInt(input.value);
                }
                input.value = btn.textContent;
                symbol = input.value;
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

//add reset function that uses "C" and check for more unusal behavior, almost finished :) decimals??