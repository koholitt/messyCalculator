const buttons = document.querySelectorAll('button');
const input = document.querySelector('input'); 

buttons.forEach(btn =>{
    btn.addEventListener('click', e =>{
        let firstValue = null;
        let symbol = "";
        let secondValue = null;

        if (isNaN(btn.textContent)){
            if((input.value == "=") && (firstValue != null) && (secondValue != null) && (symbol != "")){

            }



            if((symbol != "") && (firstValue != null)){
                secondValue = input.value;
            }
            else{
                firstValue = input.value;
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