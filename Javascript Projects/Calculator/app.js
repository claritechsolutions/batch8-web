let screen = document.getElementById('currentValue');
let prev = document.getElementById('previousValue');
buttons = document.querySelectorAll('button');
let calc = '';
prev.value=0;
screen.value=0;

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText == '÷'){
            buttonText='/';
            calc += buttonText;
            screen.value = calc;
        }
        else if(buttonText == 'x'){
            buttonText='*';
            calc += buttonText;
            screen.value = calc;
        }
        else if (buttonText == 'C') {
            calc = "";
            screen.value = calc;
            
        }
        else if (buttonText == '=') {
            calc = eval(calc);
            screen.value = calc;
            prev.value = calc;
        }
        else if (buttonText == 'Ans') {
            calc += prev.value;
            screen.value += 'Ans';
            
        }
        else {
            calc += buttonText;
            screen.value = calc;
        }

    })
}


