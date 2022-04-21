let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let calc = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'C') {
            calc = "";
            screen.value = calc;
        }
        else if (buttonText == '=') {
            screen.value = eval(calc);
        }
        else {
            calc += buttonText;
            screen.value = calc;
        }

    })
}



// // (function () {
//     let screen = document.querySelector('.calculator__display');
//     let buttons = document.querySelectorAll('.btn');
//     let equals = document.querySelector('.key-equal');
//     let clear = document.querySelector('.clearAll');
//     let screenValue="";
//         for (item of buttons) {
//         item.addEventListener('click', (e) => {
//             buttonText = e.target.innerText;
//             console.log('Button text is ', buttonText);
            
//             if (buttonText == 'C') {
//                 screenValue = "";
//                 screen.value = screenValue;
//             }
//             else if (buttonText == '=') {
//                 screen.value = eval(screenValue);
//             }
//             else {
//                 screenValue += buttonText;
//                 screen.value = screenValue;
//             }
//         })
//     }
// // })


