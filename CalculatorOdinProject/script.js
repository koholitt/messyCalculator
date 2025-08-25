const buttons = document.querySelectorAll('button');
const input = document.querySelector('input'); 

buttons.forEach(btn =>{
    btn.addEventListener('click', () =>{
        let firstValue = 0;

        if (input.value.trim() == ""){
            input.value = btn.textContent   
        }
        else{
            let firstValue = input.value;
            console.log(firstValue);
            input.value = "";
        }
          //check for the values and use else if, don't worry about the order yet ;) you got this
    });
})