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
                switch(symbol){
                    case "+" :
                         console.log(addition(parseInt(firstValue), parseInt(secondValue)));
                         break;
                    case "-":
                        console.log(subtraction(parseInt(firstValue), parseInt(secondValue)));
                        break;
                    case "/":
                        console.log(divition(parseInt(firstValue), parseInt(secondValue)));
                        break;
                    case "x":
                        console.log(multiplication(parseInt(firstValue), parseInt(secondValue)));
                        break;
                    default:
                        console.log('ERROR');
                }
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

function addition(value1, value2){
    return value1 + value2;
}

function subtraction(value1, value2){
    return value1 - value2;
}

function multiplication(value1, value2){
    return value1 * value2;
}

function divition(value1, value2){
    return value1 / value2;
}