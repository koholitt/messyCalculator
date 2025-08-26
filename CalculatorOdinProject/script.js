const buttons = document.querySelectorAll('button');
const input = document.querySelector('input'); 

buttons.forEach(btn =>{
    btn.addEventListener('click', e =>{
        let firstValue = null;
        let symbol = "";
        let secondValue = 0;
        console.log(e.target);

        input.value += btn.textContent;

        if((symbol != "") && (firstValue != null)){
           secondValue = input.value;
        }

        if (isNaN(btn.textContent)){
            firstValue = input.value;
            input.value = btn.textContent;
            symbol = input.value;
        }

        // check if the input is empty / check if it's numeric / check if the "firstValue" is already in use
    });
})