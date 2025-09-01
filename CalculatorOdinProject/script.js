const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');

let firstValue = null;
let symbol = "";
let secondValue = null;

buttons.forEach(btn =>{
    btn.addEventListener('click', e =>{
        if (isNaN(btn.textContent)){
            if((btn.textContent == "=") && (firstValue != null) && (symbol != "")){
                secondValue = input.value;

            }
            else{
                firstValue = input.value;
                console.log(firstValue);
                input.value = btn.textContent;
                symbol = input.value;
                console.log(symbol);
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